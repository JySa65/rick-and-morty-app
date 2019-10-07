import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.css";
import "@babel/polyfill";
import './main.scss'

import App from './App.jsx'

const app = document.querySelector("#app");
document.querySelector("body").style.background = "#202329";

ReactDOM.render(<App/>, app);
