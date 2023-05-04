import React  from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';
import { userLogin } from '../actions/userActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';







export default function Login() {

    const dispatch = useDispatch()

    const[email, setEmail] = useState('')
const[password, setPassword] = useState('')

const loginState = useSelector(state=>state.userLoginReducer)
const {loading, error} = loginState


const navigate = useNavigate()


//* If logged in it won't let the user see the login page
useEffect(()=>{
    if(sessionStorage.getItem('currentUser')){
        navigate('/')
    }
},[])

const loginSubmitHandler =async (e)=>{
    e.preventDefault()  
    const user = {email, password}

    dispatch(userLogin(user))

    // window.location.href('/')
    if(sessionStorage.getItem('currentUser')){

        navigate('/')
    }
}

    return (
        <div className="login">


          {loading && (<Loading/>)} 
          {error && (<Error error='Invalid Credentials'/>)}

            <Form className='login-form' onSubmit={loginSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    );
}
