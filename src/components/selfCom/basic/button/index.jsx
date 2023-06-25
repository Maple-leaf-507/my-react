import React from "react";
import './index.scss'

function Button(props) {
    const style = props.style?props.style:{height:'40px'}
    
    return (
        <div className={`button ${props.type ? props.type : ''} ${props.size ? props.size : ''}`}  style={style}>
            <main>{ props.children?props.children:'按钮' }</main>
        </div>
    )
}

export default Button