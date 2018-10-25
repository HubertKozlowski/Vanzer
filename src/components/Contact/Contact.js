import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact_main_box main_box">
        <div className="contact_left">
          <div className="cnt">
            <h3 className="uppercase">Contact</h3>
            <h5 className="contact_email uppercase">E-mail</h5>
            <span>crophos@gmail.com</span>
            <h5 className="contact_phone uppercase"> Phone</h5>
            <span>(541)754-3010</span>
            <h5 className="contact_adress uppercase">Address</h5>
            <span>Crophos Inc.</span>
            <br />
            <span>76 Camptown Road.</span>
            <br />
            <span>Chicago IL 60710</span>
            <br />
            <span>United States</span>
            <p className="footer">
              Copyright &copy; 2016. All rights reserved. Designed by Crophos.
            </p>
          </div>
        </div>
        <div className="contact_right">
          <div className="map_gps" />
          <form className="form">
            <div className="form-row">
              <label htmlFor="name" className="visuallyhidden">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
              <label htmlFor="email" className="visuallyhidden">
                Your E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your E-Mail"
              />
            </div>
            <div className="form-row">
              <label htmlFor="topic" className="visuallyhidden">
                Your topic
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                placeholder="Your Topic"
              />
            </div>
            <div className="form-row">
              <label htmlFor="message" className="visuallyhidden">
                Message
              </label>
              <textarea id="message" name="message" placeholder="Message" />
            </div>
            <button type="submit" className="submit_btn uppercase">
              Send message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
