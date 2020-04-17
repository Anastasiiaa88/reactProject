/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import Header from "../Components/Header";

class Map extends React.Component {
    render() {
      // eslint-disable-next-line no-unused-vars
      const { setPage } = this.props;
      return (
        <div>
         <Header setPage={setPage} />
         <h2>Карта</h2>
        </div>
      );
    }
  }

  export default Map; 