import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LawyerFormFirstPage from './form/LawyerFormFirstPage.jsx';
import LawyerFormLastPage from './form/LawyerFormLastPage.jsx';
import * as actions from '../../actions/index.js';

class LawyerSignup extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.state = {
      page: 1,
    };
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // handleFormSubmit({ email, password }) {
  //   this.props.signup({ email, password });
  // }

  nextPage() {
    this.setState({
      page: this.state.page + 1,
    });
  }

  previousPage() {
    this.setState({
      page: this.state.page - 1,
    });
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
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <LawyerFormFirstPage
          onSubmit={this.nextPage}
          onError={this.renderAlert}
        />}
        {page === 2 && <LawyerFormLastPage
          previousPage={this.previousPage}
          onSubmit={onSubmit}
          onError={this.renderAlert}
        />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

LawyerSignup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default connect(mapStateToProps, actions)(LawyerSignup);
