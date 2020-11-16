import React from 'react'
import homeimage from'../assets/welcome-image.jpg'
import {GoBook} from 'react-icons/go'

function Home() {
    return (
        <div className='home'>
            <div className="home-left">
                <img className='home-left-image' src={homeimage} alt=""/>
            </div>

            <div className="home-right">
                <div className="home-right-hero">
                    Welcome to your corner of books
                </div>
                <div className="home-right-description">
                    You can arrange your books the way you want,
                    add new ones remove them and rate them as you like
                </div>
                <div className="home-right-button">
                    <button className='home-button'>
                        <span className='home-button-icon-box'>
                            <GoBook className='home-button-icon'/>
                        </span>Books
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
