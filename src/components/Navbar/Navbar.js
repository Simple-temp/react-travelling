import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/logo/1.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Travelling</a>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search your destination..." aria-label="Search"/>
            </form>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="nav-item">
                <a class="nav-link " href="/">news</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">destination</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">blog</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">contact</a>
                </li>
                <li class="nav-item" className='login-btn'>
                <Link class="nav-link" to="/loginAndResister">login</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;