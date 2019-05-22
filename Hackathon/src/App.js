import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Food from './components/food';
import Activity from './components/activities';
import Accomodation from './components/accomodation';
import Travel from './components/travel';
import ColomboFood from './components/colombofood';
import ColomboFood2 from './components/colombofood2';
import Trincomalee from './components/trincomalee';
import Trincomalee2 from './components/trincomalee2';
import Kandy from './components/kandyacco';
import ColomboActivity from './components/colomboActivity';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/food' exact component={Food} />
        <Route path='/travel' exact component={Travel} />
        <Route path='/activities' exact component={Activity} />
        <Route path='/accomodation' exact component={Accomodation} />
        <Route path='/colombofood' exact component={ColomboFood} />
        <Route path='/colombofood2' exact component={ColomboFood2} />
        <Route path='/trincomalee' exact component={Trincomalee} />
        <Route path='/trincomalee2' exact component={Trincomalee2} />
        <Route path='/kandyacco' exact component={Kandy} />
        <Route path='/colomboActivity' exact component={ColomboActivity} />


      </Switch>
    </Router>
    </div>
  );
}

export default App;
