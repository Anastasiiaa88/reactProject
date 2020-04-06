import React, { Component } from "react";

class Header extends Component {
  handleLogBtn= () => {
    this.props.authBtn();
  };
  renderLogBtn = () => {
    const { isAuthorized } = this.props;
    const { navigat } = this.props.classes;
    
      return (
        <Link className={navigat} to="/login">
          <Button>Войти</Button>
        </Link>
      );
    }
  };

  render() {
    const { navigat } = this.props.classes;
    return (
        <div>
          <Link className={navigat} to="/map">
            <Button>Карта</Button>
          </Link>

          <Link className={navigat} to="/profile">
            <Button>Профиль</Button>
          </Link>
          <Link className={navigat} to="/profile">
            <Button>Логин</Button>
          </Link>
          {this.renderLogBtn()}
        </div>
    );
  }
}

const mapStateToProps = state => ({ isAuthorized: getIsAuthorized(state) });

const mapDispathToProps = { authBtn };

export default React;