/* eslint-disable no-undef */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {login: '', password: ''};

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  onChangePassword(event) {
    this.setState({password: event.target.value});
  }

  onSubmit =(e) => {
    const {setPage}  = this.props;
  
  e.preventDefault();

  setPage ('map');

  }

  render() {
    const { setPage } = this.props;
    return (
      <form onSubmit={this.onSubmit} >
        <h2>Войти</h2>
            <p>Новый пользователь?
            <Button onClick={() => setPage('registration')}>Зарегистрироваться</Button>
            </p>
        <p>
          <label>
             Логин: 
             <input type="text" name="login" value={this.state.login}
              onChange={this.onChangeLogin}
              />
          </label>
        </p>
        <p>
          <label> 
            Пароль: 
            <input type="password" name="password" value={this.state.password}
              onChange={this.onChangePassword}
            />
          </label>
       </p>
        <p>
          <input type="submit" value="Войти"/>
       </p>
      </form>
    );
  }
}

export default Login ;