import React, { Component } from 'react';

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
              <a className={this.getClassMenu('homePage')} href="/">
                Home
              </a>
              <a className={this.getClassMenu('newsPage')} href="/news">
                News
              </a>
              <a className={this.getClassMenu('aboutPage')} href="/about-us">
                About US
              </a>
              <a className={this.getClassMenu('contactPage')} href="/contact-us">
                Contact US
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;