import React from "react"
import './index.css'

function Button (props){

    return <button className="btn" onClick={ () => alert('A label desse botão é Baixar CV')}>{props.label}
    </button> 
}

export default Button
