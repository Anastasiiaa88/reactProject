import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class Registration extends Component {
    constructor(props) {
      super(props);
      this.state = {address: '', name: '', lastName: '', password: ''};
  
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeAddress(event) {
        this.setState({address: event.target.value});
      }

    onChangeName(event){
      this.setState({name: event.target.value});
    }
    onChangeLastName(event) {
        this.setState({lastName: event.target.value});
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
        <form onSubmit={this.onSubmit}>
            <h2>Регистрация</h2>
            <p>Уже зарегистрированы?
            <Button onClick={() => setPage('login')}>Войти</Button>
            </p>
          <p>
            <label>
               Адрес электронной почты: 
               <input type="text" name="address" value={this.state.address}
                onChange={this.onChangeAddress}
                />
            </label>
          </p>
          <p>
            <label> 
              Имя: 
              <input type="name" name="name" value={this.state.name}
                onChange={this.onChangeName}
              />
            </label>
         </p>
         <p>
            <label> 
              Фамилия: 
              <input type="lastName" name="lastName" value={this.state.lastName}
                onChange={this.onChangeLastName}
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
          <Button type='submit'>Войти</Button>
         </p>
        </form>
      );
    }
  }

export default Registration;