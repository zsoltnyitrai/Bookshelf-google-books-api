import React,{useState} from 'react'
import {GiHamburgerMenu}from 'react-icons/gi'
import {
    Link
  } from "react-router-dom";

import headerlogo from'../assets/header-logo.png'



function Header() {
    const [click, setClick]=useState(false)
    const handleHamburger=()=>{
        setClick(!click)
    }
    return(
        <div>
            <div className="header">
                <div className="header-container">
                    <div className="header-brands">
                        <Link to='/'><img className='header-logo' src={headerlogo}/></Link>
                        <span className='header-brands-title'>Bookshelf</span>
                    </div>
                    <div className="header-nav">
                        <ul className="header-nav-list">
                            <div className="header-nav-list-item">
                                <li><Link to='/'>About</Link></li>
                            </div>
                            <div className="header-nav-list-item">
                                <li><Link to='/'>Books</Link></li>
                            </div>
                            <div className="header-nav-list-item">
                                <li><Link to='/'>My Shelf</Link></li>
                            </div>
                            <div className="header-nav-list-item">
                                <li><Link to='/'>Contact</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="header-container-small">
                    <div className="header-small-brands">
                        <Link to='/'><img className='header-logo' src={headerlogo}/></Link>
                    </div>
                    <div className="header-small-title">Bookshelf</div>
                    <Link to='/menu' className="close"><GiHamburgerMenu className='header-hamburger' onClick={handleHamburger}/></Link>
                </div>
            </div>
        </div>
    )
}


export default Header
