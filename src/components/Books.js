import React,{useState,useEffect} from 'react'
import BookItem from './BookItem'

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
                console.log(data.items)
                setBooks(data.items)
            })
        }


    return (
        <div>
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
            <button onClick={onSearchChange}>sd</button>
            {books.map(book=>(
                    <BookItem
                        key={book.id}
                        title={book.volumeInfo.title}
                    />
            ))}
        </div>
    )
}

export default Books
