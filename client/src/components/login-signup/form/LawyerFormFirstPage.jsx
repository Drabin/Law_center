import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import validate from './validate.js';

const LawyerFormFirstPage = (props) => {
  const { handleSubmit, fields: { email, password, confirmPass } } = props;
  return (
    <div id="signup-step-one">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
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
          {props.onError()}
          <button>Next</button>
        </div>
      </form>
    </div>
  );
};

LawyerFormFirstPage.propTypes = {
  handleSubmit: PropTypes.func,
  fields: PropTypes.object,
  errorMessage: PropTypes.string,
  onError: PropTypes.func,
};

export default reduxForm({
  form: 'lawyerSignup',
  fields: ['email', 'password', 'confirmPass'],
  destroyOnUnmount: false,
  validate,
})(LawyerFormFirstPage);
