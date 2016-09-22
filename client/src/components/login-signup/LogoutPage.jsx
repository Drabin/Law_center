import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index.js';


class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <h1>Come back soon!</h1>
      </div>
    );
  }

}

LogoutPage.propTypes = {
  logoutUser: PropTypes.func,
};

export default connect(null, actions)(LogoutPage);
