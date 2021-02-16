import MainNavBar from "./components/main-nav-bar/MainNavBar";
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import {NewBill} from "./components/new-bill/NewBill";
import "./App.css";
import { Component } from "react";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        < MainNavBar/>
        <Route path ="/home" component={Home}/>
        <Route path ="/new-bill" component={NewBill}/>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

