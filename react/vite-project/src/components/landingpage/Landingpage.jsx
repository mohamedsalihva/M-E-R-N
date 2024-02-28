import React from 'react';
 import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Welcome to Our Website</h1>
        <p className="text-center">This is a simple landing page built with React.</p>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <ul>
              <li>Responsive Design</li>
              <li>Easy to Customize</li>
              <li>Fast Loading</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
