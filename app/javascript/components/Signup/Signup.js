import React, { useState, useEffect } from 'react';
import '../Login/Login.css'
import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <>
        <section className="register" id="register">
            <div className="titletext">
                <h1>Register <span>Now</span></h1>
            </div>
            <form className="login-form">
                <div className="formimg">
                    <img src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                </div> 
                <div className="formcontent">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <button className="btn">Submit</button>
                </div>
                <Link className="link-form" to="/login">Already have an account.</Link>
            </form>
        </section>
        </>
    );
}
export default Signup