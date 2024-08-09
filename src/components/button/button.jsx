import React from "react"
import './button.css'

function Button (props){

    function handleClick(){
        alert('A label desse botão é Baixar CV')
    }

    return(
        <>
            <button className="btn" onClick={handleClick}> {props.label}</button> 
        </>
    )
}

export default Button
