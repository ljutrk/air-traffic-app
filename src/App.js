import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from './components/Main';
import Footer from './partials/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
