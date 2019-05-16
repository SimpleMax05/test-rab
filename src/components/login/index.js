import React, {Component} from 'react'
import './style.css'
import User from '../../user'


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputLogin: '',
            inputPassword: ''
        };
    }
    
    checkAuthorizationPerson(){
        if (this.state.inputLogin===User.name&&this.state.inputPassword===User.pass) {
            return true;
        }
        return false;

    }
    authorizationPerson = () =>{
        if (this.checkAuthorizationPerson()) {
            this.props.setName(User.name);
            localStorage.setItem('PersonState', User.name);
            localStorage.setItem('loginin', 'true');
            document.location.replace("/profile");
        } else {
            alert('Имя пользователя или пароль введены неверно');
        }
    }
    updateInputLogin = (evt) =>{
        this.setState({
            inputLogin: evt.target.value
        });
    }
    updateInputPassword = (evt) =>{
        this.setState({
            inputPassword: evt.target.value
        });
    }

    
    render(){

        return(
            <div className='DivLogin'>
                <h3>Login</h3>
                <input value={this.state.inputLogin} onChange={evt => this.updateInputLogin(evt)} type='text'/>
                <h3>Password</h3>
                <input value={this.state.inputPassword} onChange={evt => this.updateInputPassword(evt)} type='password'/>
                <button onClick={this.authorizationPerson}>Sign in</button>
            </div>
        )
    }


}

export default Login