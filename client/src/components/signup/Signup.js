import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeFormField } from './actions/index';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e, data) {
    this.props.dispatch(changeFormField(data.name || e.target.name, data.value || e.target.value));
  }

  render() {
    var brokerCategories = [
      { key: 0, text: 'Technology', value: 'technology' },
      { key: 1, text: 'Home Improvement', value: 'home improvement' },
    ];
    const { carrierName, firstName, lastName, email, password, passwordHint, broker, mc, usdot, ownerOrOperator, onChange } = this.props;
    return (
      <div>
        <h2>Signup placeholder</h2>
        <Grid width={16}>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Carrier Name</label>
                <input
                  name='carrierName'
                  placeholder='Carrier Name'
                  onChange={e => this.onChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder='First Name'
                  name='firstName'
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  name='lastName'
                  placeholder='Last Name'
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  name='email'
                  placeholder='Email'
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name='password'
                  placeholder='Password'
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input
                  placeholder='Confirm Password'
                />
              </Form.Field>
              <Form.Field>
                <label>Password Hint</label>
                <input
                  name='passwordHint'
                  placeholder='Password Hint'
                />
              </Form.Field>
              <Form.Field className="ui center aligned grid">
                <label htmlFor="category">Broker</label>
                <Dropdown
                  name='broker'
                  fluid
                  selection
                  options={brokerCategories}
                  placeholder="Select type of job here"
                  label="Profession"
                  onChange={(e, data) => this.onChange(e, data)}
                />
              </Form.Field>
              <Form.Field>
                <label>Please provide one of the following</label>
                <input
                  name='mc'
                  placeholder='MC#'
                />
              </Form.Field>
              <Form.Field>
                <label>or</label>
                <input
                  name='usdot'
                  placeholder='USDOT#'
                />
              </Form.Field>
              <Form.Field className="ui center aligned grid">
                <label htmlFor="category">Are you a single owner/operation?</label>
                <Dropdown
                  name='broker'
                  fluid
                  name='ownerOrOperator'
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
  const { carrierName, firstName, lastName, email, password, passwordHint, broker, mc, usdot, ownerOrOperator } = state.signup;
  return { carrierName, firstName, lastName, email, password, passwordHint, broker, mc, usdot, ownerOrOperator };
};

export default connect(mapStateToProps)(Signup);
