import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeLogin(event) {
    this.setState({login: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} to="/map">
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
          <input type="submit" value="Войти" />
       </p>
      </form>
    );
  }
}

export default Login;