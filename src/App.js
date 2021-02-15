import MainNavBar from "./components/main-nav-bar/MainNavBar";
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import HomeImage from "./assets/img/homepage.jpg"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNavBar />
        <Row>
          <Col>
          <h1>Main Switch</h1>
          </Col>
          <Col>
          <img className = 'img-cont'  src = {HomeImage}></img>
          </Col>
        </Row>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
