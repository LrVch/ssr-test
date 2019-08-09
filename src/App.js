import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';

import { setMessage } from './store/appReducer';

import logo from './logo.svg';
import './App.css';


const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "myNamedChunk" */ './components/SomeComponent'),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk'],
});

const AsyncPageDefault = Loadable({
  loader: () => import(/* webpackChunkName: "pageDefault" */ './components/PageDefault'),
  loading: () => <div>loading page...</div>,
  modules: ['pageDefault'],
});

const AsyncPageAnother = Loadable({
  loader: () => import(/* webpackChunkName: "pageAnother" */ './components/PageAnother'),
  loading: () => <div>loading another page...</div>,
  modules: ['pageAnother'],
});

class App extends Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Part 1: Async component</h2>
          <AsyncComponent />

          <hr />

          <h2>Part 1: Async component</h2>
          <AsyncComponent />

          <hr />
          <hr />

          <h2>Part 2: Redux store</h2>
          <p>
            Redux: {this.props.message}
          </p>

          <hr />

          <h2>Part 3: React router</h2>
          <nav>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/another" activeClassName="active">Another page</NavLink>
          </nav>
          <Switch>
            <Route path="/" exact component={AsyncPageDefault} />
            <Route path="/another" component={AsyncPageAnother} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.app.message
})

const mapStateToDispatch = dispatch => ({
  updateMessage: (messageText) => dispatch(setMessage(messageText)),
})

export default connect(mapStateToProps, mapStateToDispatch)(App)