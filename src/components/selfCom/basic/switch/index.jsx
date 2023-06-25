import React, { useState } from "react";
import './index.scss'

function Switch(props) {
    const [flag, setFlag] = useState(false)
    // const value = props.value
    const [cicle_style,setCicle_style] = useState({})
    const [switch_bg, setSwitch_bg] = useState({ backgroundColor: '#dcdfe6' })
    
    const handleClick = () => {
        setFlag(!flag)
        if (!flag) {
            setCicle_style({ transform: 'translateX(20px)' })
            setSwitch_bg({backgroundColor: '#409eff'})
        } else {
            setCicle_style({ transform: 'translateX(0px)' })
            setSwitch_bg({backgroundColor: '#dcdfe6'})
        }
    }
    return (
        // style={switch_bg}    style={{backgroundColor:value?'#409eff':'#dcdfe6'}}
        <div className="switch-box" style={switch_bg}>
            <div className="switch-cilcle" onClick={handleClick} style={cicle_style}></div>
        </div>
    )
}

export default Switch