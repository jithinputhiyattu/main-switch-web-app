import MainNavBar from "./components/main-nav-bar/MainNavBar";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { NewBill } from "./components/new-bill/NewBill";
import Login from "./components/login/Login";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNavBar />
        <div className="main-routes">
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/new-bill" component={NewBill} />
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
