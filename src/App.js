import React from "react";
import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import Episodes from "./Episodes";
import Footer from "./footer.js";
const App = () => {
  return (
    <div className="app">
      <Intro />
      <Header />
      <main className="main-content">
        <div className="text-content">
          <h1>Every Wednesday</h1>
          <p>Dive into the Mind-Opening World of Meri Podcast</p>
        </div>
        <div className="image-content">
          <img src="./bgimage.png" alt="Person 1" />
        </div>
        <ul className="platforms-list">
          <li>Youtube</li>
          <li>Spotify</li>
          <li>Apple</li>
          <li>Google</li>
        </ul>
      </main>
      <Episodes />
      <Footer />
    </div>
  );
};

export default App;
