import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Header extends Component {
  handleClick = () => {
    // eslint-disable-next-line no-unused-vars
    const { setPage } = this.props;
  };
  
  render() {
    const { setPage } = this.props;
    return (
      <>
      <Button onClick={() => setPage('map')}>
        Карта
      </Button>
      <Button onClick={() => setPage('profile')}>
        Профиль
      </Button>
      <Button onClick={() => setPage('login')}>
        Логин
      </Button>
      </>
    );
  };
}
    
export default Header;
