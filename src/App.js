import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';

import Footer from './component/Footer/Footer';
import Transaction from './component/Transaction/Transaction';
import Home from './component/Home/Home';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

<Route exact={true} path="/" component={Home} />
<Route path="/Transaction" component={Transaction} />

      <Footer />
      </div>
    );
  }
}

export default App;
