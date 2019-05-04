import Navigate from './components/navigation'
import Home from './components/home'
import Info from './components/info'
import Profile from './components/profile'
import Login from './components/login'
import Datapicker from './components/datapicker/index'

import React, {Component} from 'react'


import { BrowserRouter as Router, Route} from "react-router-dom"

class App extends Component{
  state = {
    loginin: !!localStorage.getItem('loginin')||false,
    Name: localStorage.getItem('PersonState')||''
  };
  setName = (params) => {
    this.setState({
      Name: params,
      loginin: true
    });
  }
  render(){
    return (
      <div className="App">
        <Navigate login={this.state.loginin} name={this.state.Name}/>
        <Router >
          <Route exact path="/" component={Home}/>
          <Route path="/info" component={Info} />
          <Route path="/profile" render={(props) =>  <Profile {...props} Name={this.state.Name}/>} />
          <Route path="/Login" render={(props) => <Login {...props} Name={this.state.Name} setName={this.setName}/>} />
          <Route path="/calendar" component={Datapicker} />
        </Router>
      </div>
    );

  }

}

export default App
