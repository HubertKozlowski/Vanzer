import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      title: "",
      msg: ""
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleMsgChange = event => {
    this.setState({
      msg: event.target.value
    });
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("click");
  };

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
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <label htmlFor="name" className="visuallyhidden">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <label htmlFor="email" className="visuallyhidden">
                Your E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your E-Mail"
                value={this.state.email}
                onChange={this.handleEmailChange}
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
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="message" className="visuallyhidden">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={this.state.msg}
                onChange={this.handleMsgChange}
              />
            </div>
            <button
              type="submit"
              value="Submit"
              className="submit_btn uppercase"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
