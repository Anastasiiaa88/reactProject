import React from 'react';
import './App.css';
// import Header from "./Components/Header";
import Login from "./Pages/Login";
import Map from "./Pages/Map";
import Profile from "./Pages/Profile";
import Registration from "./Pages/Registration";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login'
    };
  }
	
  setPage = page => { 
    this.setState({ page });
  }

  render() {
	const { page } = this.state;
	  
    return (
      <div className="App">
        
        {page === 'map' && <Map setPage={this.setPage} />}
        {page === 'profile' && <Profile setPage={this.setPage} />}
        {page === 'login' && <Login setPage={this.setPage} />}
        {page === 'registration' && <Registration setPage={this.setPage} />}
      </div>
    );
  }
}

export default App;
