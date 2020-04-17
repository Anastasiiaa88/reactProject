/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Header from "../Components/Header";

class Profile extends React.Component {
  setPage = page => { 
    this.setState({ page });
  }
    render() {
      // eslint-disable-next-line no-unused-vars
      const { setPage } = this.props;
      return (
        <div>
         <Header setPage={this.setPage} />
         <h2>Профиль</h2>
        </div>
      );
    }
  }

  export default Profile; 