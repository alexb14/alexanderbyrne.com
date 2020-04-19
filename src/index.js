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
import MetconMackNew from './pages/MetconMackNew';
import Myer from './pages/Myer';
import UnlockMelb from './pages/UnlockMelb';
import workwell from './pages/workwell';
import NAB from './pages/NAB';
import Sidney from './pages/Sidney';
import ibl from './pages/ibl';
import Hypervenom from './pages/Hypervenom';
import registerServiceWorker from './registerServiceWorker';

render((
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/air-max-day" component={AirMaxDay} />
      <Route path="/officeworks" component={Officeworks} />
      <Route path="/metcon-mack" component={MetconMack} />
      <Route path="/metcon-mack-new" component={MetconMackNew} />
      <Route path="/myer" component={Myer} />
      <Route path="/unlockmelb" component={UnlockMelb} />
      <Route path="/ibl" component={ibl} />
      <Route path="/hypervenom" component={Hypervenom} />
      <Route path="/nab" component={NAB} />
      <Route path="/sidney" component={Sidney} />
      <Route path="/workwell" component={workwell} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Layout>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
