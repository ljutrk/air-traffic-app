import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    );
  }
}

export default App;
