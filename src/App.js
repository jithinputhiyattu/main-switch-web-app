import MainNavBar from "./components/main-nav-bar/MainNavBar";
import Footer from "./components/footer/Footer";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <div className="temp">test</div>
        <Footer />
      </div>
    );
  }
}

export default App;
