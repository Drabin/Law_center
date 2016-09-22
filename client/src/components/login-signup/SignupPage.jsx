import React from 'react';
import Signup from './Signup.jsx';

export default class SignPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: '',
    };
  }

  render() {
    return (
      <div className="container">
        <Signup />
      </div>
    );
  }

}
