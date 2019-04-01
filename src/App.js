import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Layout from './Component/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import Signup from './Component/SignUp/SignUp';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Layout />
      
      
      
      </BrowserRouter>
    );
  }
}

export default App;
