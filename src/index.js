import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';
import AirMaxDay from './pages/AirMaxDay';
import Officeworks from './pages/Officeworks';
import MetconMack from './pages/MetconMack';
import ibl from './pages/ibl';
import registerServiceWorker from './registerServiceWorker';

render((
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/air-max-day" component={AirMaxDay} />
      <Route path="/officeworks" component={Officeworks} />
      <Route path="/metcon-mack" component={MetconMack} />
      <Route path="/ibl" component={ibl} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Layout>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
