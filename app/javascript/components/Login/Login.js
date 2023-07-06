import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
    return (
        <>
        <section className="register" id="register">
            <div className="titletext">
                <h1>Login <span>Now</span></h1>
            </div>
            <form className="login-form">
                <div className="formimg">
                    <img src="https://i.postimg.cc/dtLWZmwx/pexels-cottonbro-studio-9656754.jpg" alt=""/>
                </div> 
                <div className="formcontent">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <button className="btn">Submit</button>
                </div>
                <Link className="link-form" to="/signup">Don't have an account ?</Link>
            </form>
        </section>
        </>
    );
}
export default Login