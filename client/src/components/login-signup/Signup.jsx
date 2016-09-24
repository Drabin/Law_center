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
    this.props.signupUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit, fields: { email, password, confirmPass } } = this.props;
    return (
      <div id="signup-step-one">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
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
            {this.renderAlert()}
            <button>Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

Signup.propTypes = {
  signupUser: PropTypes.func,
  handleSubmit: PropTypes.func,
  fields: PropTypes.object,
  errorMessage: PropTypes.string,
};

export default reduxForm({
  form: 'Signup',
  fields: ['email', 'password', 'confirmPass'],
  validate,
}, mapStateToProps, actions)(Signup);
