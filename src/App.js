import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { Home, ListBeers, NewBeer, RandomBeer, SingleBeer } from './pages'


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/allBeers' component={ListBeers}/>
          <Route exact path='/randomBeer' component={RandomBeer}/>
        </Switch>
    </div>
  );
}

export default App;
