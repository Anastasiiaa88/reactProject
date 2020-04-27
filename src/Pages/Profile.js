import React from 'react';

class Profile extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
    };
    
    render() {
      return (
        <div className="Profile">
         <h1>Профиль</h1>
        </div>
      );
    }
  }

  export default Profile;