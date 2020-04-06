import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    inputName: {
      value: ""
    },
    password: {
      value: ""
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { inputName, password } = this.state;
    const result = {
      name: inputName.value,
      pass: password.value
    };
    this.props.authRequest(result);
  };

  handleChange = name => event => {
    const { value } = event.target;
    this.setState({
      [name]: { value}
    });
  };

  render() {
    const { button } = this.props.class;
    const { inputName, password } = this.state;

    return (
      <>
          <form onSubmit={this.handleSubmit} className="LoginForm">
          <div className="InputName">
          <label>
          Имя пользователя:
          <input type="text" value={inputName.value} onChange={this.handleChange("inputName")} />
          </label>
          </div>
          <div className="Password">
          <label>
            Пароль:
            <input type="text" value={password.value} onChange={this.handleChange("password")} />
          </label>
          </div>
            <div className="LoginForm">
              <Button
                type="submit"
                className={button}
              >
                Войти
              </Button>
            </div>
          </form>
      </>
    );
  }
}

export default React;
