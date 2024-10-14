import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Loginup.css'

const SignIn = ({ toggleForm }) => {
  return (
    <div className="bgLogin">
         <div className='signIn_main'>
      <h2 className='text-center fw-bold'>Sign In</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='formLab mt-3'>Email address</Form.Label>
          <Form.Control type="email"  />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className='formLab mt-3  w-100'>Password  <a style={{float:'right'}} href="">Forget Pwd</a></Form.Label> 
          <Form.Control type="password"  />
        </Form.Group>
        <Button variant="primary" type="submit"  className="my-4 mx-auto d-block CardBtn p-2 fw-bold fs-6 w-100">
          Sign In
        </Button>
      </Form>
      <p className='text-center'>
        Don't have an account? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>Sign Up</span>
      </p>
    </div>
    </div>
   
  );
};

export default SignIn; 
