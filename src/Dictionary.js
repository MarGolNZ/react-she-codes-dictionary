import React, { useState } from "react";
import "./Dictionary.css"


export default function Dictionary() {
    let [keyword, setKeyword] = useState("null")
   
    function search(event) {
    event.preventDefault()
    alert(`Seraching for ${keyword}`)
   }
   
   function handleKeywordChange(event) {
       setKeyword(event.target.value)
   }
   
    return (
        <div className="Dictionary">
            <form 
            onSubmit={search}>
              <input className='form-control' type="search" placeholder="Type a word" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}