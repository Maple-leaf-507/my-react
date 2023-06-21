import React from "react";
import './index.scss'

function Progress(props) {
    const style = props.style?props.style:{}
    return (
        <div className="progress" style={style}>
            <div className="progress-per" style={{width:props.percentage? 350*props.percentage /100 +'px':'175px'}}></div>
        </div>
    )
}

export default Progress