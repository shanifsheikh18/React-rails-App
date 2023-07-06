import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = () => {
    return (
        <>
        <div className="footer-basic">
        
                <div className="social">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
            <hr className="partition"/>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Sitemap</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Notice</a></li>
                </ul>
                <p className="copyright">Company Name © OST. 2021</p>
            
        </div>
        </>
    );
}
export default Footer