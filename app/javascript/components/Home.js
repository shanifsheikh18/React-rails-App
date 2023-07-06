import React, { useState, useEffect } from 'react';
import './Home.css'
import Services from './Services';
import { Link } from "react-router-dom";
const Hello = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          
          <div className="hero-text">
            <h1>POST YOUR THOUGHTS</h1>
            <p>Donec lobortis magna at ligula tristique maximus. Suspendisse lacinia ligula lacus. Nunc id risus a dui bibendum finibus tincidunt eu magna. Suspendisse a dictum neque. Suspendisse sit amet diam et libero posuere pharetra. Sed vel magna nec dolor aliquam lobortis vitae id ante.</p>
              <div className="hero-form">
                <Link className="hero-form-submit" to="/signup">Signup</Link>
                <Link className="hero-btn" to="/login">Login</Link>
              </div>        
          </div>
          
          <div className="hero-image">
            <img src="https://assets.codepen.io/495197/undraw_Newsletter_re_wrob.svg" />
          </div>
          
        </div>
      </header>

      <Services />

    
    </>
  );
};

export default Hello;