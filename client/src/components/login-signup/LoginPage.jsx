import React from 'react';
import Login from './Login.jsx';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: '',
    };
  }

  render() {
    return (
      <div className="container">
        <Login />
      </div>
    );
  }

}
