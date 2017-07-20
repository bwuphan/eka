import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navigation />
        { children }
      </div>
    );
  }
}

export default connect(state => state)(App);