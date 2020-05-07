import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Writing from "./pages/Writing";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AirMaxDay from "./pages/AirMaxDay";
import Officeworks from "./pages/Officeworks";
import Myer from "./pages/Myer";
import UnlockMelbourne from "./pages/UnlockMelbourne";
import MetconMack from "./pages/MetconMack";
import ibl from "./pages/ibl";
import Hypervenom from "./pages/Hypervenom";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/air-max-day" component={AirMaxDay} />
      <Route path="/officeworks" component={Officeworks} />
      <Route path="/myer" component={Myer} />
      <Route path="/unlockmelbourne" component={UnlockMelbourne} />
      <Route path="/metcon-mack" component={MetconMack} />
      <Route path="/ibl" component={ibl} />
      <Route path="/hypervenom" component={Hypervenom} />
      <Route path="/about" component={About} />
      <Route path="/writing" component={Writing} />
      <Route path="/contact" component={Contact} />
    </Layout>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
