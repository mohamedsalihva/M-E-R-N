import React from 'react';
 import Navbar from './Navbar';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Login Page</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
