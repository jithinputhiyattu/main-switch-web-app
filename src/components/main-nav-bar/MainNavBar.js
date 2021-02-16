import { PureComponent } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo";
import "./style.scss";


class MainNavBar extends PureComponent {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/home">
          <img className="logo" src={logo}></img>
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/home">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/new-bill">New Bill</Link>
        </Nav>
      </Navbar>
    );
  }
}

export default MainNavBar;
