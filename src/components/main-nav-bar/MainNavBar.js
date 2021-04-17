import { PureComponent } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo";
import "./style.scss";

class MainNavBar extends PureComponent {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand>
            <Link to="/home">
              <img className="logo" src={logo}></img>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/home" className="item">Home</Link>
            <Link to="/features" className="item">Features</Link>
            <Link to="/new-bill" className="item">New Bill</Link>
            <Link to="/login" className="button">
              <Button className="button">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavBar;
