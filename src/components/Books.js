import React,{useState,useEffect} from 'react'

function Books() {
    const API='AIzaSyCCtlMIvk5tLvK8mCWcRe4RaWn8MbsiOro'
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [search,setSearch]=useState('')


    let AutorURL=`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&key=${API}`

    const onSearchChange=(e)=>{
        
        console.log(search)
    }

    return (
        <div>
            <input 
                placeholder={'author'}
                type="search" 
                onChange={(e)=>setSearch(e.target.value)} 
                value={search}
            />
            <button onClick={onSearchChange}>sd</button>
        </div>
    )
}

export default Books
