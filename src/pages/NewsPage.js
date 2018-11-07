import React, {Component} from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import NewsData from './../assets/data/NewsData'

class NewsPage extends Component{
  componentDidMount(){
    document.title = 'News';
  }
  render(){
    return(
      <div className="AppWrapper">
        <Header pageActive={this.props.data.pageActive}/>
        <div className="hero content-title">
          <div className="hero-body">
            <h1 className="title is-1">News</h1>
          </div>
        </div>
        <div className="container news-container">
          {
            NewsData.map((NewsDataRow, i) =>
              <div className="columns is-multiline">
                <div className="column is-4">
                  <figure className="image is-is3by3">
                    <img src={NewsDataRow.image} alt={NewsDataRow.title}/>
                  </figure>
                </div>
                <div className="column is-8">
                  <div className="content">
                    <h3 className="subtitle is-3">{NewsDataRow.title}</h3>
                    <p>{NewsDataRow.content}</p>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default NewsPage;