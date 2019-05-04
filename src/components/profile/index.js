import React, {Component} from 'react'
import './style.css'
class Profile extends Component{
    state = {
        reverted: false
    }
    render(){
        let norm = JSON.parse(localStorage.getItem('dateInformation'));
        if(norm===null){
            norm=[];
        }
        const listItems = norm.map((d) => 
            <div className="eventDiv" key={d.id} >
                <h4>{d.date}</h4> 
                <p>{d.text}</p>
            </div>);
        return(
            <div>
                <h1>Hello {this.props.Name}</h1>
                {listItems}
                
            </div>
        )
    }

}

export default Profile