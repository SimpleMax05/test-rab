import React, {Component} from 'react'

class Profile extends Component{
    state = {
        reverted: false
    }
    render(){
        const listItems = JSON.parse(localStorage.getItem('dateInformation')).map((d) => 
            <div key={d.id} >
                <h6>{d.date}</h6> 
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