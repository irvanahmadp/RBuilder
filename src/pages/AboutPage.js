import React, { Component } from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

class AboutPage extends Component{
  componentDidMount(){
    document.title = 'About';
  }
  render(){
    return(
      <div className="AppWrapper">
        <Header pageActive="aboutPage"/>
        <div className="hero content-title">
          <div className="hero-body">
            <h1 className="title is-2">About US</h1>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;