import React from 'react';
import UseFirebase from '../../hooks/UseFirebase';

const Login = () => {
  const {GoogleSignIN}=UseFirebase()
    return (
        <div className="container row">
            <div className="col-lg-6 "></div>
<div className="new-login-box col-lg-6">
    <div className="white-box">
        <h3 className="box-title m-b-0">Sign In to Admin</h3>
        <small>Enter your details below</small>
               <form className="form-horizontal new-lg-form" id="loginform" method="post" >
        <div class="form-group  m-t-20">
          <div className="col-xs-12">
            <label>Email Address</label>
            <input className="form-control w-98%" type="text" name="email" required="" placeholder="Username"/>
          </div>
        </div>
        <div className="form-group">
          <div class="col-xs-12">
            <label>Password</label>
            <input className="form-control w-98%" type="password" name="password" required="" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group text-center m-t-20">
          <div class="col-xs-12">
            <button className="btn btn-info btn-lg btn-block btn-rounded my-3 text-uppercase waves-effect waves-light" type="submit">Log In</button>
            <button  onClick={GoogleSignIN} className="btn btn-info btn-lg btn-block btn-rounded my-3 text-uppercase waves-effect waves-light" >Log In</button>
          </div>
        </div>
      </form>
      <button onClick={GoogleSignIN}>This button</button>
    </div>
  </div>            

        </div>
    );
};

export default Login;