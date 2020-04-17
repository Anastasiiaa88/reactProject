/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import Header from "../Components/Header";

class Map extends React.Component {
  setPage = page => { 
    this.setState({ page });
  }
    render() {
      // eslint-disable-next-line no-unused-vars
      const { setPage } = this.props;
      return (
        <div>
         <Header setPage={this.setPage} />
         <h2>Карта</h2>
        </div>
      );
    }
  }

  export default Map; 