import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {GrLanguage} from 'react-icons/gr'

function BookItem({title,author,language,pagecount,about,categories,image,rating,}){


    return (
        <div className='book-item'>
            
            <div className="book-item-header">
                
                <div className="book-item-header-title">{title}</div>
                <div className="book-item-header-author">{author}</div>
                <div className="book-item-header-rating">
                    
                </div>
            </div>
            
            <div className="book-item-img"><img src={image} className='book-item-image' alt=""/></div>

            <div className="book-item-description">
                <div className="book-item-description">
                    <div className="book-item-description-language"><GrLanguage/> Language: {language}</div>
                    <div className="book-item-description-categorie"><span>Category: {categories}</span></div>
                    {/* <div className="book-item-description-about">{about}</div> */}
                </div>
            </div>

            <div className="book-item-footer">
                <div className="book-item-footer-pagecount">page count: {pagecount}</div>
            </div>
        </div>
    )
}

export default BookItem
