import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import validate from './form/validate.js';
import * as actions from '../../actions/index.js';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
  }

  render() {
    const { handleSubmit, fields: { email, password, confirmPass } } = this.props;
    return (
      <div id="signup-step-one">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <div className="row">
            <input {...email} type="email" placeholder="Email" />
            {email.touched && email.error && <div>{email.error}</div>}
          </div>
          <div className="row">
            <input {...password} type="password" placeholder="Password" />
            {password.touched && password.error && <div>{password.error}</div>}
          </div>
          <div className="row">
            <input {...confirmPass} type="password" placeholder="Confirm Password" />
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
  handleSubmit: PropTypes.func,
  fields: PropTypes.object,
};

export default reduxForm({
  form: 'Signup',
  fields: ['email', 'password', 'confirmPass'],
  validate,
}, null, actions)(Signup);
