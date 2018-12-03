import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
// 加载组件
import Home from './components/home';
import Pack from './components/pack';
// 加载reducer
import packreducer from './components/pack/reducer';

console.log(createStore(packreducer).getState());

const store = createStore(packreducer);

const os = window.require('os');

console.log(os);

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/pack' exact component={Pack}></Route>
      </Switch>
    </Router>
  </Provider>
);
