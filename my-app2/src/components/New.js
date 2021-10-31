import React, { Component } from 'react'
import Newitems from './Newitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class New extends Component {

    static defaultProps = {
        pageSize: 6,
        country: 'in',
        category: 'sports',
        setProgess: 0
      }
      static propTypes = {
          pageSize: PropTypes.number,
          country: PropTypes.string,
          category: PropTypes.string,
          setProgess: PropTypes.number
      }
     
    constructor(props){
        super(props);
        this.state ={
            articles: [],
            loading: false,
            page:1,
            pageSize:20,
            totalResults:0,
            hasMore: true
        }
    };
    async componentDidMount(){
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26c503787ab34389b9c2752998cefd89&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        this.props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    fetchMoreData = async()=>{
        this.setState({page:this.state.page+1})
        this.props.setProgress(0);
        console.log(this.state.articles.length);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26c503787ab34389b9c2752998cefd89&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        
        this.setState({page: this.state.page+1,
            articles : this.state.articles.concat(parsedData.articles)
        })
        if(this.state.articles.length > this.state.totalResults)
        {   console.log("completed");
            this.setState({
                hasMore: false
            })
        }
        this.props.setProgress(100);
    }

    
    render() {
        console.log(this.state.totalResults);
        return (
            
            <div className="container" >
              <h2 className="text-center">Dayum News - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
              
              <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner/>}
        >
            <div className="container row">
              {this.state.articles.map((element)=>{
                return <div className="col-md-4 my-3" key={element.url}>

                <Newitems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unkown"} timePublish={element.publishedAt} source={element.source.name}/>
                </div>
               
            })}</div>
            </InfiniteScroll>
             
             </div>
             
        )
    }
}
