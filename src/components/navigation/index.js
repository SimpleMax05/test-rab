import React, {Component} from 'react'
import PropTypes from 'prop-types';


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
            <div className='NavDiv'>
                <ul className='nav'>
                    <li><a href='/'>Home</a></li>
                    <li><a href={this.props.login? '/profile':'/login'}>Profile</a></li>
                    <li><a href='/info'>Info</a></li>
                    {this.props.login? <li><a href='/calendar'>Calendar</a></li>:''}
                </ul>
                <h2 className='LoginNavigation'>{this.props.name}</h2>
            </div>
        )
    }

}
Navigation.propTypes = {
    login: PropTypes.string,
    name: PropTypes.string
};

export default Navigation