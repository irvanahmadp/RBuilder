import React, { Component } from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

class ContactPage extends Component{
  componentDidMount(){
    document.title = 'Contact';
  }
  render(){
    return(
      <div className="AppWrapper">
        <Header pageActive="contactPage"/>
        <div className="hero content-title">
          <div className="hero-body">
            <h1 className="title is-2">Contact US</h1>
          </div>
        </div>
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-4">
                  <div className="content contact-detail">
                    <p>
                      <strong>Address:</strong><br/>
                      Jl. Bunga Mawar, Surabaya
                    </p>
                    <p>
                      <strong>Phone:</strong><br/>
                      +62 8888 8888 888
                    </p>
                  </div>
                </div>
                <div className="column is-1"></div>
                <div className="column is-7">
                  <form className="form-contact">
                    <div className="columns is-multiline">
                      <div className="column is-6">
                        <div className="field field-input">
                          <div className="control">
                            <input className="input" type="text" placeholder="Your Name" required/>
                          </div>
                        </div>
                        <div className="field field-input">
                          <div className="control">
                            <input className="input" type="text" placeholder="Phone"/>
                          </div>
                        </div>
                      </div>
                      <div className="column is-6">
                        <div className="field field-input">
                          <div className="control">
                            <input className="input" type="text" placeholder="Your Email" required/>
                          </div>
                        </div>
                        <div className="field field-input">
                          <div className="control">
                            <input className="input" type="text" placeholder="Subject" required/>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="field">
                          <div className="control">
                            <textarea className="textarea" type="text" placeholder="Message" required></textarea>
                          </div>
                        </div>
                        <div className="field">
                          <div className="control">
                            <button className="button is-warning">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ContactPage;