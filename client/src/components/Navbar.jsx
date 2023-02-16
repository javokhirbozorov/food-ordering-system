import React from "react";
import "../styles/components/navbar.scss"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartState = useSelector(state=>state.cartReducer)
    return (

        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">EaTurkish</a>
    <div className="collapse navbar-collapse nav-links" id="navbarTogglerDemo03">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/login">Login</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/cart">
            Cart
            {cartState.cartItems.length}
            </a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    )
}
