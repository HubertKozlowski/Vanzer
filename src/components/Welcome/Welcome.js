import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome_main_box main_box">
        <div className="container">
          <span className="welcome_v">V</span>
          <div className="welcome_hero_text uppercase">
            <h2>Vanzer</h2>
            <p>Free creative PSD templates for you</p>
            <a href="/">
              Read more <i className="fas fa-long-arrow-alt-right" />
            </a>
            <div className="rotate-scroll">
              <span>Scroll down</span>
            </div>
          </div>
        </div>
        <aside>
          <button className="hamburger">
            <span />
            <span />
            <span />
          </button>
          <div className="welcome_media">
            <a href="/">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="/">
              <i className="fab fa-twitter" />
            </a>
            <a href="/">
              <i className="fas fa-globe" />
            </a>
            <a href="/">
              <i className="fab fa-behance" />
            </a>
          </div>
        </aside>
        <span className="welcome_vanzer">Vanzer</span>
      </div>
    );
  }
}

export default Welcome;
