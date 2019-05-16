import React, {Component} from 'react'
import PropTypes from 'prop-types';

import './style.css'
class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverted: false
        }
    
    }
    render(){
        let norm = JSON.parse(localStorage.getItem('dateInformation'));
        if(norm===null){
            norm=[];
        }
        const listItems = norm.map((d) => 
            <div className='EventDiv' key={d.id} >
                <h4>{d.date}</h4> 
                <p>{d.text}</p>
            </div>);
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                {listItems}
                
            </div>
        )
    }

}
Profile.propTypes = {
    name: PropTypes.string
};

export default Profile