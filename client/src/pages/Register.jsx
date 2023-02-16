import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Register() {
    return (
        <div className="register">
      
      <Form className='register-form'>
      <h1 className="register-heading">Register</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Your name..." />
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control type="password" placeholder="Password" />

          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
           
      </div>
    );
  }
  

