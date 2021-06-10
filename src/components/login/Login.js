import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";
import style from "bootstrap/dist/css/bootstrap.css";
import HomeImage from "../../assets/img/homepage.jpg";
import "./style.scss";

class Login extends Component {
  render() {
    return (
      <div class="w-1/3 p-5 px-16">
      <form class="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
        <div class="flex items-center mb-4">
          <input
            class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div class="flex items-center mb-4">
          <input
            class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
            type="text"
            placeholder="Password"
          ></input>
        </div>
        <div class="flex justify-between items-center">
          <button class="w-full py-2 px-4 rounded bg-blue-600 hover:bg-white-700 text-white font-bold">
            Login
          </button>
          <div class="p-4 text-blue-700">OR</div>
          <button class="w-full py-2 px-4 rounded bg-blue-600 hover:bg-white-700 text-white font-bold">
            Register
          </button>
        </div>
      </form>
    </div>
    );
  }
}
export default Login;
