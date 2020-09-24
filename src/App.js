import React from "react";
import GlobalStyle from "./Styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Properties from "./pages/Properties/Properties";
import About from "./pages/About/About";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/properties" component={Properties} />
          <Route path="/about" component={About} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
