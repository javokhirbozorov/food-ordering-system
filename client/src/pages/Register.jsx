import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux"
import { useState,  } from 'react';
import { userAction } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import Success from '../components/Success';
import Loading from '../components/Loading';
import Error from '../components/Error';


export default function Register() {

  const registerState = useSelector(state =>state.userRegisterReducer)
  const {error , loading , success} = registerState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    function register(){
        if(password !== confirmPassword){
            alert('Password did not match')
        } else{
          const user = {
            name,
            email,
            password
          }
          dispatch(userAction(user))
          navigate('/')
        }
    }

    
    return (
        <div className="register">

{loading && (<Loading/>)}
          {success && (<Success success='User Registered Successfully' />)}
          {error && (<Error error='Email already registered' />)}
      
      <Form className='register-form'>
      <h1 className="register-heading">Register</h1>
        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Control  required value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your name..." />
          <Form.Control name={'email'} onChange={(e)=>setEmail(e.target.value)}  required type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3"  controlId="registerEmail">

          <Form.Control  name={"password"} required type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />

          <Form.Control   type="password"  onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerCheckbox">
          <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
        </Form.Group>
        <Button onClick={()=>register()} variant="success" type="submit">
          Register
        </Button>
      </Form>
           
      </div>
    );
  }
  

