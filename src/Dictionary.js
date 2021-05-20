import React, { useState } from "react";
import "./Dictionary.css";
import axios from 'axios';
import Results from "./Results"


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
   
    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }    

    function handleSubmit(event) {
        event.preventDefault()
        search()
   }
   
   function handleResponse(response) {
    setResults(response.data[0])
   }

   function handleKeywordChange(event) {
       setKeyword(event.target.value)
   }

   function load() {
       setLoaded(true);
       search()
   }


   if(loaded) {

   
    return (
        <div className="Dictionary">
            <section>
               <form 
            onSubmit={handleSubmit}>
              <input className='form-control' type="search" placeholder="Type a word here" onChange={handleKeywordChange}/>
            </form>
            <div className="hint">
                Start searching for a word...
            </div>
            </section>
            <Results results={results}/> 
        </div>
    )}else{
        load();
        return null
    }

}