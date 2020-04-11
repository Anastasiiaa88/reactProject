import React from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Login from "./Pages/Login.js";
import Map from "./Pages/Map.js";
import Profile from "./Pages/Profile.js";

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
		{page !== 'login' && <Header setPage={this.setPage} />}
        {page === 'map' && <Map/>}
        {page === 'profile' && <Profile/>}
        {page === 'login' && <Login setPage={this.setPage} />}
      </div>
    );
  }
}

export default App;
