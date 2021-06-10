import { PureComponent } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo";
import "./style.scss";

class MainNavBar extends PureComponent {
  render() {
    return (
      <div>
        <header class="fixed bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center">
          <a href="/home" class="text-2xl text-white">
            My App
          </a>
          <div>
           
              <a href="/login"
              class="text-white hover:bg-gray-700 px-3 rounded py-1"
            >
              Login
            </a>
            <a href="/login"
              class="text-white hover:bg-gray-700 px-3 rounded py-1"
            >
              Register
            </a>
          </div>
        </header>
        <main class="bg-gray-200  flex-1">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </main>
      </div>
    );
  }
}

export default MainNavBar;
