import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './views/Home/Home.jsx';
import './App.css';

export default class App extends Component {
    render() {
      return(
        <div className="app">
          <Home />
        </div>
      );
    }
};

