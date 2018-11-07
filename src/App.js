import React, { Component } from 'react';
import { Route } from "react-router-dom";

import 'bulma/css/bulma.min.css';
import './assets/css/app.css';

import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props =>(
          <HomePage data={{pageActive : 'homePage'}} />
        )} />
        <Route path="/news" render={props =>(
          <NewsPage data={{pageActive : 'newsPage'}} />
        )} />
        <Route path="/about-us" render={props =>(
          <AboutPage data={{pageActive: 'aboutPage'}} />
        )} />
        <Route path="/contact-us" render={props=>(
          <ContactPage data={{pageActive: 'contactPage'}} />
        )} />
      </div>
    );
  }
}

export default App;
