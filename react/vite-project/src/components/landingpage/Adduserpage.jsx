import React from 'react';
  import Navbar from './Navbar';

const AddUserPage = () => {
const handleclick =()=>{
    alert(`user added succesfully`)
    console.log()
}

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center">Add User Page</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="adress">Address</label>
                <input type="text" id="adress" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary btn-block" onClick={handleclick}>Add User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserPage;
