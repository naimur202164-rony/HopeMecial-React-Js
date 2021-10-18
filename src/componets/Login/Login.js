import React from 'react';
import UseAuth from '../../hooks/UseAuth';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const {GoogleSignIN,handleRegistration,handleEmail,handlePassWord}=UseAuth()
    return (
        <div className="container row">
            <div className="col-lg-6 "></div>
<div className="new-login-box col-lg-6">
    <div className="white-box">
        <h3 className="box-title m-b-0">Sign In to Admin</h3>
        <small>Enter your details below</small>
               <form onSubmit={handleRegistration} className="form-horizontal new-lg-form" >
        <div class="form-group  m-t-20">
          <div className="col-xs-12">
            <label>Email Address</label>
            <input onBlur={handleEmail} className="form-control w-98%" type="text" name="email" required="" placeholder="Username"/>
          </div>
        </div>
        <div className="form-group">
          <div class="col-xs-12">
            <label>Password</label>
            <input onBlur={handlePassWord} className="form-control w-98%" type="password" name="password" required="" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group text-center m-t-20">
          <div class="col-xs-12">
            <button onSubmit={handleRegistration} className="btn btn-info btn-lg  btn-rounded my-3 text-uppercase waves-effect waves-light" >Log In</button>
           
          </div>
        </div>
      </form>
      <div className="ms-2">
      <Button className="me-2" onClick={GoogleSignIN}>Sign IN</Button>
     <Link to="register"><Button>Register</Button></Link>

      </div>
    </div>
  </div>            

        </div>
    );
};

export default Login;