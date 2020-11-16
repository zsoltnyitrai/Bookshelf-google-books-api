import React from 'react'
import {
    Link
  } from "react-router-dom";

function Menu() {
    return (
        <div className="popover" id="menu">
            <div className = 'content'>
                <div className = 'nav'>
                    <ul className = 'nav-list'>
                        <div className = 'nav-list-item'>
                            <li><Link to='/'>About</Link></li>
                        </div>
                        <div className = 'nav-list-item'>
                            <li><Link to='/books'>Books</Link></li>
                        </div>
                        <div className = 'nav-list-item'>
                            <li><Link to='/'>Services</Link></li>
                        </div>
                        <div className = 'nav-list-item'>
                            <li><Link to='/'>Contact</Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu
