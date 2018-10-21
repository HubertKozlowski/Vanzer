import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio_main_box main_box">
        <div className="container">
          <h3 className="uppercase">Portfolio</h3>
          <div className="portfolio_row">
            <div className="portfolio_col-1-4 col-1">
              <div className="machine_image" />
            </div>
            <div className="portfolio_col-1-4 col-2">
              <div className="cat_image" />
              <span>Coffee cup</span>
              <p>
                Vivamus sagittis lacus veu augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <div className="chain" />
            </div>
            <div className="portfolio_col-1-4 col-3">
              <div className="building_image" />
            </div>
            <div className="portfolio_col-1-4 col-4">
              <ul>
                <li>
                  <a href="/"> Industrial design </a>
                </li>
                <li>
                  <a href="/"> Web design </a>
                </li>
                <li>
                  <a href="/"> Photography </a>
                </li>
              </ul>
              <div className="dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          </div>
        </div>
        <span className="portfolio_letter">P</span>
      </div>
    );
  }
}

export default Portfolio;
