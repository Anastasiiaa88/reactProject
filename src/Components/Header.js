/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Header extends Component {
  handleClick = () => {
    const { setPage } = this.props;
  };

  render() {
    const { setPage } = this.props;
    return (
      <>
      <Button onClick = { () => {
        return ('map');
      }}>
        Карта
      </Button>
      <Button onClick = { () => {
        return ('profile');
      }}>
        Профиль
      </Button>
      <Button onClick = {() => {
        return ('login');
      }}>
        Логин
      </Button>
      </>
    );
  };
}
    
export default Header;
