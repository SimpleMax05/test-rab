import React, {Component} from 'react'
import './style.css'
import Polzov from '../../polzovatel'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputLogin: '',
            inputPassword: ''
        };
    }

    render(){

        return(
            <div className="divLogin">
                <h3>Login</h3>
                <input value={this.state.inputLogin} onChange={evt => this.updateinputLogin(evt)} type="text"/>
                <h3>Password</h3>
                <input value={this.state.inputPassword} onChange={evt => this.updateinputPassword(evt)} type="password"/>
                <button onClick={this.autorisetPerson}>Sign in</button>
            </div>
        )
    }
    autorisetPerson = () =>{
        if (this.state.inputLogin===Polzov.name&&this.state.inputPassword===Polzov.pass) {
            this.props.setName(Polzov.name);
            localStorage.setItem('PersonState', Polzov.name);
            localStorage.setItem('loginin', 'true');
            document.location.replace("/profile");
        } else {
            alert("Имя пользователя или пароль введены неверно");
        }
       // console.log(this.state.inputLogin+"<>"+this.state.inputPassword+"<>"+Polzov.name);
    }
    updateinputLogin = (evt) =>{
        this.setState({
            inputLogin: evt.target.value
        });
    }
    updateinputPassword = (evt) =>{
        this.setState({
            inputPassword: evt.target.value
        });
    }


}

export default Login