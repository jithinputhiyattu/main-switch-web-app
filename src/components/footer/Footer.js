import { PureComponent } from "react";
import { Col, Row } from "react-bootstrap";

import "./style.scss";

class Footer extends PureComponent {
  render() {
    return (
      <div class="block space-x-4 ...">
        <div class="inline-block ...">Quick Links</div>
        <div class="inline-block ...">About Us</div>
        <div class="inline-block ...">Contact Us</div>
      </div>
    );
  }
}

export default Footer;
