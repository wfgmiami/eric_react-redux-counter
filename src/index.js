import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App'
import CounterRed from './CounterRed';
import CounterBlue from './CounterBlue';
import {Provider} from 'react-redux';
import store from './store';

const root = document.getElementById('app');

const route = (

<Provider store = {store}>
  <Router history = { hashHistory } >
    <Route path='/' component= { App }>
      <Route path = 'red' component = { CounterRed } />
      <Route path = 'blue' component = { CounterBlue } />
    </Route>
  </Router>
</Provider>
)

render(route,root);
