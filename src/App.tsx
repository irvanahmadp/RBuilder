import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./assets/css/app.css";

import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route
          path="/about-us"
          element={<AboutPage/>}
        />
        <Route
          path="/contact-us"
          element={<ContactPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
