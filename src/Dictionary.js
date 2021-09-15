import React, { useState } from "react";
import "./Dictionary.css";
import axios from 'axios';
import Results from "./Results";
import Photos from "./Photos"
require('dotenv').config()

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null)
   
    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrlDictionary = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrlDictionary).then(handleDictionaryResponse);
        const pexelsApikey = process.env.REACT_APP_API_KEY_PEXELS;
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { headers: {Authorization: `Bearer ${pexelsApikey}` } };
        axios.get(pexelsApiUrl, headers).then(handlePexelsResponse);
       }    

    function handleSubmit(event) {
        event.preventDefault()
        search()
   }
   
   function handlePexelsResponse(response) {
    console.log(response)
    setPhotos(response.data.photos)

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
            <Results results={results} /> 
            <Photos photos={photos} />
        </div>
    )}else{
        load();
        return null
    }

}