import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    
    // Initial state
    this.state = { open: false };
    
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="cart">
       <button className="btn btn-block" onClick={this.toggle.bind(this)}>
                            Open/close
       </button>
        <div id="demo" className={"collapse" + (this.state.open ? ' in' : '')}>
         
      <div className="navbar navbar-default">
      <div className="container-fluid">
      <div className="nav-right nav-menu">
      <Link to="/" className="nav-item r-item">Home</Link>
      <Link to="/Transaction" className="nav-item r-item">Transaction</Link> 
      
      </div>
      
      </div>
      </div>
        </div>
        </div>
         
            
         
    );
  }

};

export default Header;

 

