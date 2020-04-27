import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import { doAuthLogout } from '../../modules/auth';

import Button from './node_modules/@material-ui/core/Button';

class Header extends Component {
  handleClick = () => {
    const { doAuthLogout } = this.props;

    doAuthLogout();
  };

  render() {
    return (
          <Button onClick={this.handleClick} to="/map">
            Карта
          </Button>
            <Button onClick={this.handleClick} to="/profile">
              Профиль
            </Button>
            <Button onClick={this.handleClick} to="/login">
               Логин
            </Button>
    );
  }
}

const mapStateToProps = state => state.auth;
const mapDispatchToProps = { doAuthLogout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
