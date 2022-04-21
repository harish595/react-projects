import React, { Component } from "react";
import Componentjson from "./componentjson/Componentjson";
import EmployeeForm from "./componentjson/EmployeeForm";
import SpotifyForm from "./componentjson/SpotifyForm";
// import Navbar from "./navbardrop/Navbar";
import "./global.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Componentjson />

        {/* Employee form */}
        {/* <EmployeeForm/> */}

        {/* spotify login form */}
        {/* <SpotifyForm/> */}
      </div>
    );
  }
}

// todo list using react router dom

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// const App = () => {
//   return (
//     <Router>

//     </Router>
//   )
// }

// export default App
