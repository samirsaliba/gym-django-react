import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import Dashboard from './gym/Dashboard';
import Header from './layout/Header';
import { Provider } from 'react-redux';
import store from '../store';
import history from '../history';

import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';

import LoginForm from './auth/LoginForm';
import Home from './gym/Home';
import ModalidadesList from './gym/ModalidadesList';
import TurmasList from './gym/TurmasList';
import PlanosList from './gym/PlanosList';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/modalidades' component={ModalidadesList} />
            <Route exact path='/turmas' component={TurmasList} />
            <Route exact path='/planos' component={PlanosList} />
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

