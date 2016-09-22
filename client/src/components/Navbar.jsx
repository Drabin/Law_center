import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  // checks to see if user is sigined in
  // if yes render signout button other wise render signin and signup
  authCheck() {
    if (this.props.authenticated) {
      return (
        <li className="pull-right">
          <Link to="/logout">Log out</Link>
        </li>
      );
    }
    return [
      <li className="pull-right" key={1}>
        <Link to="/login">Login</Link>
      </li>,
      <li className="pull-right" key={2}>
        <Link to="/signup">Signup</Link>
      </li>,
    ];
  }

  render() {
    return (
      <header>
        <nav>
          <ul className="nav nav-pills">
            <li><a href="#">Logo</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Events</a></li>
            {this.authCheck()}
          </ul>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

Navbar.propTypes = {
  authenticated: PropTypes.bool,
};

export default connect(mapStateToProps)(Navbar);
