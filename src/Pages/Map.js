import React from 'react';

class Map extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
    };
    
    render() {
      return (
        <div className="Map">
         <h1>Карта</h1>
        </div>
      );
    }
  }

  export default Map;