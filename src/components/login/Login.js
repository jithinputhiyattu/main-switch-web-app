import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import style from "bootstrap/dist/css/bootstrap.css";
import HomeImage from "../../assets/img/homepage.jpg";
import "./style.scss";

class Login extends Component {
  render() {
    return (
      <Container>
        <div className="row-md-6 center">
          <div className="xs-6 col-md-3 mt-6 center">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}
export default Login;
