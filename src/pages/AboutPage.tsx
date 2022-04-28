import { FC, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage: FC = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="AppWrapper">
      <Header pageActive="aboutPage" />
      <div className="hero content-title">
        <div className="hero-body">
          <h1 className="title is-2">About US</h1>
        </div>
      </div>
      <div className="hero">
        <div className="hero-body">
          <div className="container content has-text-justified">
            <h3 className="subtitle is-4">
              Welcome To <span id="W_Name1">RBulder</span>
            </h3>
            <p className="is-size-5-tablet">
              <span id="W_Name2">RBulder</span> is a Professional{" "}
              <span id="W_Type1">Contractor</span> Platform. Here we will
              provide you only interesting content, which you will like very
              much. We're dedicated to providing you the best of{" "}
              <span id="W_Type2">Contractor</span>, with a focus on
              dependability and{" "}
              <span id="W_Spec">Contractor company profile</span>. We're working
              to turn our passion for <span id="W_Type3">Contractor</span> into
              a booming{" "}
              <a
                href="https://www.blogearns.com"
                rel="do-follow"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                online website
              </a>
              . We hope you enjoy our <span id="W_Type4">Contractor</span> as
              much as we enjoy offering them to you.
            </p>
            <p className="has-text-weight-bold is-size-5">
              Thanks For Visiting Our Site
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
