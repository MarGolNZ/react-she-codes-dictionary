import React, { useState } from "react";
import "./Dictionary.css";
import axios from 'axios';
import Results from "./Results"


export default function Dictionary() {
    let [keyword, setKeyword] = useState("null");
    let [results, setResults] = useState(null)
   
    function search(event) {
    event.preventDefault()
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse)
   }
   
   function handleResponse(response) {
    setResults(response.data[0])
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
            <Results results={results}/>
        </div>
    )
}