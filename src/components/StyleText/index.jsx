import React from "react";
import './index.css'

function Paragraph(props) {

    function UpperCase(text) {
        return text.toUpperCase()
    }

    return  <div className="component">
                <p style={{ color: props.colorText }}> {UpperCase(props.p)}</p>
            </div>

}

export default Paragraph