
import './App.css';
import New from './components/New';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
export default class App extends Component {
  state = {
    progress:0
  }

  setProgress= (progress) =>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height = {3}
      />
        <Switch>
          <Route exact path="/"><New setProgress = {this.setProgress} key="general" pageSize={10} country="in" category="general"/></Route>
          <Route exact path="/business"><New setProgress = {this.setProgress} key="business" pageSize={10} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><New setProgress = {this.setProgress} key="entertainment" pageSize={10} country="in" category="entertainment"/></Route>
          <Route exact path="/sports"><New setProgress = {this.setProgress} key="sports" pageSize={10} country="in" category="sports" /></Route>
          <Route exact path="/health"><New setProgress = {this.setProgress} key="health" pageSize={10} country="in" category="health" /></Route>
          <Route exact path="/science"><New setProgress = {this.setProgress} key="science" pageSize={10} country="in" category="science" /></Route>
          <Route exact path="/technology"><New setProgress = {this.setProgress} key="technology" pageSize={10} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}


