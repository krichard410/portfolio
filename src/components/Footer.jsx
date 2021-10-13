import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div class="container footerContainer mb-3">
        <h3>Let's work together,&nbsp;</h3>
        <h3>
          <a href="mailto: kirsten.richard@dal.ca">email me</a>
        </h3>
        <div class="container contactContainer">
          <div class="row">
            <div class="col">
              <h6>Check out more details on my <a href="www.google.com">resume.</a></h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
