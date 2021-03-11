import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
// import Footer from "./components/Footer";

// const Products = lazy(() => import("./components/pages/Products"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          {/* <Suspense fallback={<h5> Loading...</h5>}> */}
          <Route
            path="/products"
            exact
            component={Products}
            // render={() => <Redirect to="/" />}
          />
          {/* </Suspense> */}
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
