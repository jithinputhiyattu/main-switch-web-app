import { PureComponent } from "react";
import { Col, Row } from "react-bootstrap";

import "./style.scss";

class Footer extends PureComponent {
  render() {
    return (
      <div class="mx-auto p-1 sm:w-1/2">
        <div class="text-xl font-semibold text-blue-500">Get In Touch!</div>
        <div class="block space-x-4 content-center">
          <div class="inline-block ...">Quick Links</div>
          <div class="inline-block ...">About Us</div>
          <div class="inline-block ...">Contact Us</div>
        </div>
      </div>
    );
  }
}

export default Footer;
