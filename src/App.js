import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/menu'
import Head from './components/heading'
import Vector from './components/vector'
import Ddd from './components/3d'
import Psd from './components/psd'
import Icons from './components/icons'
export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Head/>
          <Menu/>
          <Switch>
          <Route path="/vector" component = {Vector}  />
          <Route path="/psd" component = {Psd}  />
          <Route path="/icons" component = {Icons}  />
          <Route path="/3d" component = {Ddd}  />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

