import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index.js';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email, password });
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
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <div id="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className="row">
            <input {...email} type="text" placeholder="Email" />
          </div>
          <div className="row">
            <input {...password} type="password" placeholder="Password" />
          </div>
          <div className="row">
            {this.renderAlert()}
            <button>Login</button>
          </div>
          <div className="to-signup">
            <Link to="/signup">Sign up for Social</Link>
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

Login.propTypes = {
  handleSubmit: PropTypes.func,
  fields: PropTypes.object,
  loginUser: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default reduxForm({
  form: 'Login',
  fields: ['email', 'password'],
}, mapStateToProps, actions)(Login);
