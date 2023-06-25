import React from "react";
import './index.scss'

function Progress(props) {
    const style = props.style ? props.style : {}
    const type = props.type ? props.type : 'line'
    
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (props.percentage / 100) * circumference;
    
    return (
        <>
            {
                type === 'line'?
                    <div className="line" style={style}>
                        <div className="line-per" style={{width:props.percentage? 350*props.percentage /100 +'px':'175px'}}></div>
                    </div>
                    :
                    <svg className="progress-circle" width={radius * 2} height={radius * 2}  style={style}>
                        <circle
                            className="progress-circle-background"
                            cx={radius}
                            cy={radius}
                            r={radius}
                        />
                        <circle
                            className="progress-circle-progress"
                            cx={radius}
                            cy={radius}
                            r={radius}
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                        />
                    </svg>
            }
        </>
    )
}

export default Progress