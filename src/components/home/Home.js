import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import HomeImage from "../../assets/img/homepage.jpg"

class Home extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h1>Main Switch, Testing...!</h1>
        </Col>
        <Col>
          <img className="img-cont" src={HomeImage}></img>
        </Col>
      </Row>
    );
  }
}
export default Home;
