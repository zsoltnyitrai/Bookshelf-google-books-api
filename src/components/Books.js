import React,{useState} from 'react'
import BookItem from './BookItem'
import defaultbook from '../assets/default.jpg'

function Books() {
    const API='AIzaSyCCtlMIvk5tLvK8mCWcRe4RaWn8MbsiOro'
    const [books,setBooks]=useState([])
    const [titleSearch,setTitleSearch]=useState('')
    const [authorSearch,setAuthorSearch]=useState('')


    const onSearchChange= async(e)=>{
        //IF I SEARCH FOR AUTHOR AND TITLE
        if (titleSearch.length>0&&authorSearch.length>0){
            URL=`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleSearch}+inauthor:${authorSearch}&key=${API}`
        }
        //IF I SEARCH FOR AUTHOR
        else if(titleSearch.length===0&&authorSearch.length>0){
            URL=`https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorSearch}&key=${API}`
        }
        //IF I SEARCH FOR TITLE
        else{
            URL=`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleSearch}&key=${API}`
        }
        console.log(URL)
        await fetch(URL)
            .then((response)=>response.json())
            .then(data=>{
                setBooks(data)
                console.log(books)
                console.log(books.length)

            })
    }


    return (
        <div className='books'>
            <div className="books-searchbar">
                <input
                    className='author-search' 
                    placeholder={'author'}
                    type="search" 
                    onChange={(e)=>setAuthorSearch(e.target.value)} 
                    value={authorSearch}
                />
                <input
                    className='title-search' 
                    placeholder={'title'}
                    type="search" 
                    onChange={(e)=>setTitleSearch(e.target.value)} 
                    value={titleSearch}
                />
                <button onClick={onSearchChange}>SEARCH</button>
            </div>
            <div className="books-results">
                {books.items?(books.items.filter(book=>Object.keys(book).length>0).map(book=>(
                        <BookItem
                            key={book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            language={book.volumeInfo.language}
                            pagecount={book.volumeInfo.pagecount}
                            // about={book.searchInfo.textSnippet}
                            categories={book.volumeInfo.categories}
                            // image={defaultbook}
                            image={book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.thumbnail:defaultbook}
                            rating={book.volumeInfo.averageRating}
                        />)
                )):(
                    <div>
                        Empty
                    </div>
                )
            }
            </div>
        </div>
        
    )
}

export default Books
