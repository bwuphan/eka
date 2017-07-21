import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeFieldForm } from './actions/index';


class Signup extends Component {
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
    var brokerCategories = [
      { key: 0, text: 'Technology', value: 'technology' },
      { key: 1, text: 'Home Improvement', value: 'home improvement' },
    ];
    console.log('hello', this.props);
    return (
      <div>
        <h2>Signup placeholder</h2>
        <Grid width={16}>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Carrier Name</label>
                <input placeholder='Carrier Name' />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input placeholder='Confirm Password' />
              </Form.Field>
              <Form.Field>
                <label>Password Hint</label>
                <input placeholder='Password Hint' />
              </Form.Field>
              <Form.Field className="ui center aligned grid">
                <label htmlFor="category">Broker</label>
                <Dropdown
                  fluid
                  selection
                  options={brokerCategories}
                  placeholder="Select type of job here"
                  label="Profession"
                />
              </Form.Field>
              <Form.Field>
                <label>Please provide one of the following</label>
                <input placeholder='MC#' />
              </Form.Field>
              <Form.Field>
                <label>or</label>
                <input placeholder='USDOT#' />
              </Form.Field>
              <Form.Field className="ui center aligned grid">
                <label htmlFor="category">Are you a single owner/operation?</label>
                <Dropdown
                  fluid
                  selection
                  options={brokerCategories}
                  placeholder="Select"
                />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
};


const mapStateToProps = (state) => {
  const { carrierName, firstName, lastName, email, password, password2, passwordHint, broker, mc, usdot, ownerOrOperator } = state.signup;
  return { carrierName, firstName, lastName, email, password, password2, passwordHint, broker, mc, usdot, ownerOrOperator };
};

export default connect(mapStateToProps)(Signup);
