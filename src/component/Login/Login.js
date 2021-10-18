import React from 'react';
import { Form, Button } from 'react-bootstrap';
import UseFirebase from '../../hooks/UseFirebase';
import UseAuth from './../../hooks/UseAuth';

const Login = () => {
  const { HandleGoogleIn, handleEmail, handlePassword, handleSubmit } = UseAuth()
  return (

    <div className="row container">
      <div className="col-lg-6 col-sm-12 my-4">
        <Form className="">
          <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="col-lg-6 col-sm-12 my-4">
        <h2> Sign In With Google Account</h2>
        <Button onClick={HandleGoogleIn}>Google</Button>
      </div>

    </div>
  );
};

export default Login;