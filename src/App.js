import Navigate from './components/navigation'
import Home from './components/home'
import Info from './components/info'
import Profile from './components/profile'
import Login from './components/login'
import Diary from './components/diary/index'

import React, {Component} from 'react'


import { BrowserRouter as Router, Route} from "react-router-dom"

class App extends Component{
  state = {
    loginin: !!localStorage.getItem('loginin')||false,
    name: localStorage.getItem('PersonState')||''
  };
  setName = (params) => {
    this.setState({
      name: params,
      loginin: true
    });
  }
  render(){
    return (
      <div className='App'>
        <Navigate key={1} login={this.state.loginin} name={this.state.name}/>
        <Router >
          <Route key={2} exact path='/' component={Home}/>
          <Route key={3} path='/info' component={Info} />
          <Route key={4} path='/profile' render={(props) =>  <Profile {...props} Name={this.state.name}/>} />
          <Route key={5} path='/Login' render={(props) => <Login {...props} Name={this.state.Name} setName={this.setName}/>} />
          <Route key={6} path='/calendar' component={Diary} />
        </Router>
      </div>
    );

  }

}

export default App
