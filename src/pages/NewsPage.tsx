import { FC, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import NewsData from "../assets/data/NewsData.json";

const NewsPage: FC = () => {
  useEffect(() => {
    document.title = "News";
  }, []);

  return (
    <div className="AppWrapper">
      <Header pageActive="newsPage" />
      <div className="hero content-title">
        <div className="hero-body">
          <h1 className="title is-1">News</h1>
        </div>
      </div>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            {NewsData.map((NewsDataRow, i) => (
              <div key={i} className="columns is-multiline news-container">
                <div className="column is-4">
                  <figure className="image news-figure is-3by1">
                    <img
                      className="news-list-content-img"
                      src={NewsDataRow.image}
                      alt={NewsDataRow.title}
                    />
                  </figure>
                </div>
                <div className="column is-8">
                  <div className="content">
                    <h4 className="is-size-4-tablet">{NewsDataRow.title}</h4>
                    <p className="is-size-5-tablet">{NewsDataRow.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsPage;
