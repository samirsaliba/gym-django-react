import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import Dashboard from './gym/Dashboard';
import Header from './layout/Header';
import { Provider } from 'react-redux';
import store from '../store';
import history from '../history';

import LoginForm from './auth/LoginForm';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  
  render() {
    return (
      // <Provider store={store}>
      //   <Header />
      //   <Dashboard />
      // </Provider>
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            {/* <Route exact path='/' component={ExamesList} />
            <Route exact path='/' component={MatriculaPlanosList} />
            <Route exact path='/' component={MatriculaTurmasList} /> */}
            <Route exact path='/login' component={LoginForm} />
          </Switch>
        </Router>
      </Provider>
      
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
  );

export {
  App
}