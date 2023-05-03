import React, { useEffect, useState } from "react";
import "../styles/components/navbar.scss"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default function Navbar() {
  const cartState = useSelector(state=>state.cartReducer)

const dispatch = useDispatch()
  const userState = useSelector((state) => state.userLoginReducer);
const {currentUser} = userState

    //  if(sessionStorage.getItem('currentUser')){

    //  var currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    // } 

    const [user, setUser]=useState(null)

  const logoutHandler = async ()=>{
    await sessionStorage.clear()
    window.location.reload()
  }


  

    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            EaTurkish
          </a>
          <div
            className="collapse navbar-collapse nav-links"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav">
              {

                currentUser ?
                <>


         

{/* 
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      {currentUser.name}
                    </a>
                  </li>
                  <li className="nav-item">
                  
                  <a onClick={logoutHandler} className="nav-link" aria-current="page" href="/">Log Out</a>
                  </li> */}

  

            <DropdownButton
      align="end"
      title={currentUser.name}
      id="dropdown-menu-align-end"
    >
      <Dropdown.Item eventKey="1">Orders</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item  onClick={()=>{dispatch(logoutUser())}} eventKey="2">Log Out</Dropdown.Item>
    </DropdownButton>
                  </>
                  :
                 <>
                 <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/login">
                      Login
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/register"
                    >
                      Register
                    </a>
                  </li>
                 </>

              }

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/cart">
                  Cart : 
                  {cartState.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
