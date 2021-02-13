import { PureComponent } from "react";
import { Col, Row } from "react-bootstrap";

import './style.scss';

class Footer extends PureComponent {
  render() {
    return (
      <div className = 'footer-main'> 
        <Row  md={3}>
          <Col className = 'footer-column text-center'>Quick Links</Col>
          <Col className = 'footer-column text-center'>About Us</Col>
          <Col className = 'footer-column text-center'>Contact Us</Col>
        </Row>
      </div>
    );
  }
}

export default Footer;