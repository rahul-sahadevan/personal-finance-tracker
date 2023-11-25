import React from "react";
import './style.css'
// button component---------------------
function Button({text,onClick,blue,dissabled}){
    return (
        <div dissabled={dissabled} className={blue ? "btn btn-blue":"btn"} onClick={onClick}>
            {text}
        </div>
    )
}
export default Button