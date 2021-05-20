import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {
    if(props.synonyms) {
     return (
        <ul className="Synonyms">
            {props.synonyms.map(function (synonym, index) {
                return (
                    <li>
                      <span key="index">
                        {synonym}
                    </span>  
                    </li>
                )
            })}
        </ul>
     )  
    }else{
        return null
    }
    
} 