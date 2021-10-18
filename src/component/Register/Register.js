import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="row container">
            <div className="col-lg-6 col-sm-12 my-4">
                <Form className="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-Password</Form.Label>
                        <Form.Control type="Re-Werite password" placeholder="Re-Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
            <div className="col-lg-6 col-sm-12 my-4">
                <h2 className="text-info">Please Register</h2>
                <p className="text-muted">Already have an <Link to="/login"> account Login now</Link></p>

            </div>

        </div>
    );
};

export default Register;