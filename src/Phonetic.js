import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
    console.log(props.phonetic)
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer"><i class="fas fa-volume-up"></i></a>
            {props.phonetic.text}

        </div>
    )
}