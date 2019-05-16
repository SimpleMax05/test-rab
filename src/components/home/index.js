import React, {Component} from 'react'
import logo from './HomeBackgroundKosmodes.jpg'
class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            reverted: false
        }
    
    }
    render(){

        return(
            <div>
                <img src={logo} alt=''/>  
            </div>
        )
    }

}

export default Home