import React from 'react'
import headerlogo from'../assets/header-logo.png'
function Footer() {
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
