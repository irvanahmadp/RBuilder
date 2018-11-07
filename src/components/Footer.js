import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <div className="content">
                <h5 className="title is-4">RBuilder</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="content">
                <h5 className="title is-5">Contact Details</h5>
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
            <div className="column is-3">
              <div className="content">
                <h5 className="title is-5">Our Services</h5>
                <ul>
                  <li>Roofing</li>
                  <li>Painting</li>
                  <li>Construction</li>
                  <li>Plumbing</li>
                  <li>Electrical</li>
                </ul>
              </div>
            </div>
            <div className="column is-3">
              <div className="content">
                <h5 className="title is-5">Drop a Message</h5>
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea className="textarea" placeholder="Your Message"></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-warning">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;