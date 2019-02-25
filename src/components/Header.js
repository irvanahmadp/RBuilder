import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
        menuActive: false,
        menuActiveClass: 'navbar-menu'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(){
    if(this.state.menuActive){
      /* Jika menu aktif, maka menu akan dinonaktifkan dan disembunyikan */
      this.setState({
        menuActive: false,
        menuActiveClass: 'navbar-menu'
      });
    }else{
      this.setState({
        menuActive: true,
        menuActiveClass: 'navbar-menu is-active'
      });
    }
  }
  getClassMenu(page){
    if(page === this.props.pageActive){
      return 'navbar-item is-active';
    }else{
      return 'navbar-item';
    }
  }
  render(){
    return(
      <nav className="navbar" 
      role="navigation"
      aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item  subtitle is-4" href='/'>
              RBUILDER
            </a>
            <div className="navbar-burger burger" data-target="navMenu"
            onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" 
          className={this.state.menuActiveClass}>
            <div className="navbar-end">
              <Link className={this.getClassMenu('homePage')} to="/">
                Home
              </Link>
              <Link className={this.getClassMenu('newsPage')} to="/news">
                News
              </Link>
              <Link className={this.getClassMenu('aboutPage')} to="/about-us">
                Contact US
              </Link>
              <Link className={this.getClassMenu('contactPage')} to="/contact-us">
                Contact US
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;