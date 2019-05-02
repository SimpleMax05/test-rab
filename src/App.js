import Navigate from './components/navigation'
import Home from './components/home'
import Info from './components/info'
import Profile from './components/profile'
import Login from './components/login'

import React, {Component} from 'react'


import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component{
  state = {
    loginin: false
  }
  render(){
    return (
      <div className="App">
        <Navigate />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/profile" component={this.state.loginin? Profile:Login}/>
        </Router>
      </div>
    );

  }

}

export default App
