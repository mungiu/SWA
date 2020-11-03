import React from 'react'
import Buttons from './buttons';

class Authentication extends React.Component {
  constructor(properties) {
    super(properties);

    this.state = {
      userLogin: null,
      message: 'Input login'
    };
  }

  handleLogin = () => {
    this.setState({
      userLogin: document.getElementById('loginInput'),
      message: 'Hello ' + document.getElementById('loginInput').value + ''
    });
  }

  render() {
    return (
      <div>
        <form>
          Login: <input type="text" id="loginInput"></input>
        </form>
        <Buttons
          onLogin={this.handleLogin} />
        <p id="welcomeMessage">{this.state.message}</p>
      </div>)
  }
}



export default Authentication