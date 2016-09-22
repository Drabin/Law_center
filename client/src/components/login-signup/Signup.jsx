import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index.js';


class Signup extends React.Component {

  render() {
    return (
      <div id="signup-step-one">
        <h2>Step one</h2>
        <h1>Signup</h1>
        <form>
          <div className="row">
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <input type="text" placeholder="Password" />
          </div>
          <div className="row">
            <input type="text" placeholder="Confirm Password" />
          </div>
          <div className="row">
            <button>Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}


Signup.propTypes = {
  onSignupOne: PropTypes.func,
};

export default reduxForm({
  form: 'Signup',
  fields: ['email', 'password', 'confirmPass'],
}, null, actions)(Signup);
