import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      
      <div className="navbar navbar-default">
      <div className="container-fluid">
      <div className="nav-right nav-menu">
      <Link to="/" className="nav-item r-item">Home</Link>
      <Link to="/Transaction" className="nav-item r-item">Transaction</Link> 
      </div>
      
      </div>
      </div>
    );
  }
}

export default Header;
