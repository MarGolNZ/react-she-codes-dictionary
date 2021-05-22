import React, { useState } from "react";
import "./Dictionary.css";
import axios from 'axios';
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
   
    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        // const unsplashApiKey = "idRS3EiZNJfm69vJLuh9Ll9v7_UJlkhs5ofYU-oMZV8"



        const pexelsApikey = '563492ad6f9170000100000102e33bc6aa5d4e7c9cebc84d89a92ca8';
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { headers: {Authorization: `Bearer ${pexelsApikey}` } };
        axios.get(pexelsApiUrl, headers).then(handlePexelsResponse);
       }    

    function handleSubmit(event) {
        event.preventDefault()
        search()
   }
   
   function handlePexelsResponse(response) {
    console.log(response)

   }


   function handleDictionaryResponse(response) {
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
            <section className="input">
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