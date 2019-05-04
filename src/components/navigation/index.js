import React, {Component} from 'react'
import './style.css'
class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverted: false
        };
    }
    
    render(){
        return(
            <div className="navDiv">
                <ul className="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href={this.props.login? '/profile':'/login'}>Profile</a></li>
                    <li><a href="/info">Info</a></li>
                    {this.props.login? <li><a href="/calendar">Calendar</a></li>:""}
                </ul>
                <h2 className="loginNavigation">{this.props.name}</h2>
            </div>
        )
    }

}

export default Navigation