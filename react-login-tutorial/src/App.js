import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";

// const Login = lazy(() => import("./components/login"));

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          {/* <Suspense fallback={<div> Loading... </div>}> */}
          <Route path="/login" component={Login} />
          {/* </Suspense> */}
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
