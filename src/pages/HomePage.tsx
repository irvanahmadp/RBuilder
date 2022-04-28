import { FC, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: FC = ()  => {
  useEffect(() => {
    document.title = "RBuilder";
  }, []);

  return (
    <div className="AppWrapper">
      <Header pageActive="homePage" />
      <div className="hero content-home-1 content-full">
        <div className="hero-body">
          <div className="container is-flex is-vcentered">
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-5">
                <div className="tile">
                  <div className="message" style={{ background: "#f8a005" }}>
                    <div className="content">
                      <h4 className="title is-4">Solid & Efficient Building</h4>
                      <p>
                        Sed nec purus volutpat, mattis eros ac, placerat mauris.
                        Fusce accumsan pellentesque molestie. In in erat sem. Ut
                        porta magna vitae molestie luctus. Phasellus quis metus
                        sem. Donec at consectetur ipsum. Proin facilisis nunc
                        sit amet arcu porta posuere.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tile">
                  <div className="message" style={{ background: "#2e2e2e" }}>
                    <div className="content color-white">
                      <h4 className="title is-4 color-white">
                        Solid & Efficient Building
                      </h4>
                      <p>
                        Sed nec purus volutpat, mattis eros ac, placerat mauris.
                        Fusce accumsan pellentesque molestie. In in erat sem. Ut
                        porta magna vitae molestie luctus. Phasellus quis metus
                        sem. Donec at consectetur ipsum. Proin facilisis nunc
                        sit amet arcu porta posuere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="message" style={{ background: "#f8a005" }}>
                    <div className="content">
                      <h4 className="title is-4">Solid & Efficient Building</h4>
                      <p>
                        Sed nec purus volutpat, mattis eros ac, placerat mauris.
                        Fusce accumsan pellentesque molestie. In in erat sem. Ut
                        porta magna vitae molestie luctus. Phasellus quis metus
                        sem. Donec at consectetur ipsum. Proin facilisis nunc
                        sit amet arcu porta posuere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile">
                <div className="message" style={{ background: "#2e2e2e" }}>
                  <div className="content color-white">
                    <h4 className="title is-4 color-white">
                      Solid & Efficient Building
                    </h4>
                    <p>
                      Sed nec purus volutpat, mattis eros ac, placerat mauris.
                      Fusce accumsan pellentesque molestie. In in erat sem. Ut
                      porta magna vitae molestie luctus. Phasellus quis metus
                      sem. Donec at consectetur ipsum. Proin facilisis nunc sit
                      amet arcu porta posuere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero content-list-project">
        <div className="hero-body">
          <div className="container">
            <h3 className="title is-3">Our Projects</h3>
            <div className="columns is-multiline is-centered">
              <div className="column is-3 is-4-tablet">
                <figure className="image is-3by2">
                  <img
                    src="/assets/images/img-project-3.jpg"
                    alt="RBuilder 1"
                  />
                </figure>
              </div>
              <div className="column is-3 is-4-tablet">
                <figure className="image is-3by2">
                  <img
                    src="/assets/images/img-project-4.jpg"
                    alt="RBuilder 2"
                  />
                </figure>
              </div>
              <div className="column is-3 is-4-tablet">
                <figure className="image is-3by2">
                  <img
                    src="/assets/images/img-project-5.jpg"
                    alt="RBuilder 3"
                  />
                </figure>
              </div>
              <div className="column is-3 is-4-tablet">
                <figure className="image is-3by2">
                  <img
                    src="/assets/images/img-project-6.jpg"
                    alt="RBuilder 4"
                  />
                </figure>
              </div>
              <div className="column is-3 is-4-tablet">
                <figure className="image is-3by2">
                  <img
                    src="/assets/images/img-project-7.jpg"
                    alt="RBuilder 5"
                  />
                </figure>
              </div>
              <div className="column is-3 is-4-tablet">
                <figure className="image is-3by2">
                  <img
                    src="/assets/images/img-project-8.jpg"
                    alt="RBuilder 6"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero content-testimonials">
        <div className="hero-body">
          <div className="container">
            <h3 className="title is-3">Testimonials</h3>
            <div className="columns">
              <div className="column is-4">
                <div className="box">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          className="is-rounded"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="box">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          className="is-rounded"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-4">
                <div className="box">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          className="is-rounded"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong>
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
