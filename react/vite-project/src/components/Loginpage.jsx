import React, { Component } from 'react'

export default class Loginpage extends Component {
    handleLogin = () => {
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     console.log("username:",username);
     console.log("password:",password);
     alert(`username: ${username}, password: ${password}`)

    }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" id='username' placeholder='username' />
        <br />
        <input type="text" id='password' placeholder='password' />
        <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
