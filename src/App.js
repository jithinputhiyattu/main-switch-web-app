import MainNavBar from "./components/main-nav-bar/MainNavBar";
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import "./App.css";
import { Component } from "react";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        < MainNavBar/>
        <Home/>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

