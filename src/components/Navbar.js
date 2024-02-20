import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { useSelector } from "react-redux";



const Navbar = () => {
    const { cartItems } = useSelector(state => state.cartSlice)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand leftview" to="/`">Exclusive</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{ justifyContent: 'flex-end' }} id="navbarSupportedContent">
                    <Link className="nav-link navText active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link navText" to="/Timer">Items</Link>
                    <Link className="nav-link navText" to='/about'>About</Link>
                    <Link className="nav-link navText" to='/Home'>Sign Up</Link>
                    <Link className="nav-link navText" to='/Cart' > <div style={{
                        position: 'relative'
                    }}><FaHeart color="#000" size={"2rem"} /> <p style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 2,
                        color: '#fff'
                    }}>{cartItems?.length}</p></div></Link>
                    <div className="rightview">
                        <input className="input" type="search" placeholder="Search" />
                        <FaSearch size={"1rem"} />
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar