import { PureComponent } from "react";
import { Col, Row } from "react-bootstrap";

import './style.scss';

class Footer extends PureComponent {
  render() {
    return (
      <div className = 'footer-main'> 
        <Row>
          <Col className = 'footer-column'>About Us</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </div>
    );
  }
}

export default Footer;