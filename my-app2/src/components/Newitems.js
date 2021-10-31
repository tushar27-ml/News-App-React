import React, { Component } from 'react'

export default class Newitems extends Component {
    render() {
        let {title,description,imgUrl, newsUrl, author, timePublish,source} = this.props;
        return (
            
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: "1",left: "90%"}}> {source} </span>
                <img src={imgUrl? imgUrl : "https://www.adn.com/resizer//N_vROe2VaW9Ysf1v3F0esWITQBg=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/adn/6JUDXHYCVVCX7K3NXCRWAB5TX4.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                <div className="card-footer">
                <small className="text-muted">-By {author} on {timePublish}</small>
                </div>
                
                </div>
            </div>
            
        )
    }
}
