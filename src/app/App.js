import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './components/partials/Header';
import { Main } from './Main';
import { Footer } from './components/partials/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrap">
          <Header />
          <Main />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export { App };
