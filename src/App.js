import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
