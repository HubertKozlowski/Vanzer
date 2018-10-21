import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="about_main_box main_box">
        <div className="container">
          <div className="about_hero_text">
            <h2 className="uppercase">
              <span>Creative</span> studio
            </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vel lorem ante. Quisque pulvinar enim vitae hendrerit venenatis.
              Praesent eleifend dapibus dapibus.{" "}
            </p>
          </div>
          <div className="about_small_image image_laptop" />
          <div className="about_small_image image_coffee" />
        </div>
        <span className="about_letter_A">A</span>
        <span className="about_about_us">Ab</span>
      </div>
    );
  }
}

export default AboutUs;
