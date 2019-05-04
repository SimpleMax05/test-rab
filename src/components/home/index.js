import React, {Component} from 'react'
import logo from "./Kosmodes.jpg"
class Home extends Component{
    state = {
        reverted: false
    }
    render(){

        return(
            <div>
                <img style={{width: "100%"}} src={logo} alt=""/>  
            </div>
        )
    }

}

export default Home