import React, { Component, Fragment } from 'react';
import Header from './components/partials/Header';
import Main from './Main';
import Footer from './components/partials/Footer';
import './App.css';

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

export default App;
