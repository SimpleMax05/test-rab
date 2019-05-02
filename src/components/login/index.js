import React, {Component} from 'react'

class Login extends Component{
    state = {
        reverted: false
    }
    render(){

        return(
            <div>
                <h3>Login</h3>>
                <input type="text"/>
                <h3>Password</h3>>
                <input type="password" name="" id=""/>
                <button>Sign in</button>
            </div>
        )
    }

}

export default Login