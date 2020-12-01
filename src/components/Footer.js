import React from 'react'
import headerlogo from'../assets/header-logo.png'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement}from '../actions'

function Footer() {
    const counter=useSelector(state=>state.counter)
    const isLogged=useSelector(state=>state.isLogged)
    const dispatch=useDispatch()
    return (
        <div>
            <div className="footer-main">
                <div className="footer-left">
                    <div className="footer-list">
                        <li>About</li>
                        <li>Book Api</li>
                        <li>Contact</li>
                        <li>Login</li>
                        <li>Signup</li>
                        <li>{counter}</li>
                        <button onClick={()=>dispatch(increment())}>+</button>
                        <button onClick={()=>dispatch(decrement())}>-</button>

                    </div>
                </div>
                <div className="footer-rigth">
                    <img className='footer-logo' src={headerlogo} alt=""/>
                    <div>Bookshelf App</div>
                    <div className="creator">created by Zsolt Nyitrai</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
