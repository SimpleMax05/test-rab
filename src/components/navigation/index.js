import React, {Component} from 'react'

class Navigation extends Component{
    state = {
        reverted: false
    }
    render(){

        return(
            <div style={{height: "30px"}}>
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/info">Info</a>
            </div>
        )
    }

}

export default Navigation