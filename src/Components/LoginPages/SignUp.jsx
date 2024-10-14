// SignUp.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = ({ toggleForm }) => {
  return (
    <div className="bgLogin">
         <div className='signIn_main'>
      <h2 className='text-center fw-bold'>Sign Up</h2>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label className='mt-2'>First name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className='mt-2'>Last name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className='mt-2'>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label className='mt-2'>Business name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox" className='d-flex align-items-center w-100 fs-12'>   
          <Form.Check type="checkbox" className="me-2"/>
          <Form.Label className='mt-2'>I agree to the terms and conditions</Form.Label>
        </Form.Group>
        <Button variant="primary" type="submit" className="my-3 mx-auto d-block CardBtn p-2 fw-bold fs-6 w-100">
          Sign Up
        </Button>
      </Form>
      <p className='fs-10 text-center' >
        Already have an account? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>Sign In</span>
      </p>
    </div>
    </div>
   
  );
};

export default SignUp;
