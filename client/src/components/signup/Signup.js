import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("hello");
  }

  onChange(e) {
    console.log('change', e);
  }

  render() {
    return (
      <div>
        <h2>Signup placeholder</h2>
      </div>
    );
  }
}