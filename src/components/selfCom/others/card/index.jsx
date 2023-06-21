import React from "react";
import './index.scss'

function Card(props) {
    const style = {
        height: props.height + 'px',
    }
    
    return (
        <div className="card" style={style}>
            {
                props.header ? <div>{ props.header }</div>:''
            }
            <main>{props.children}</main>
            {
                props.header ? <div>{ props.header }</div>:''
            }
        </div>
    )
}

export default Card