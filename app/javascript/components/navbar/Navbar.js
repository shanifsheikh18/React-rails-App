import React, { useState } from "react";
import {MenuItems} from "./menuItems";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar(){
    const [clicked, setClicked]=useState(false);

    
    function handleClick(){
        setClicked(!clicked)
    }


    return(
        <>
            <nav className="navbarItems">
                <h1 className="navbar-logo"><Link to="/">OST</Link><span>.</span></h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item)=>{
                        return (
                            <li>
                                <Link className='nav-links' to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        );

                    })}
                    
                </ul>
            </nav>
        </>
    )
}
export default Navbar