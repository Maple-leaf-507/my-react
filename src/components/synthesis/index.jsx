import React from "react";
import './index.scss'

import Card from "../selfCom/others/card"; // 卡片
import Button from "../selfCom/basic/button"; // 按钮
import Progress from "../selfCom/basic/progress"; // 进度条

function Synthesis() {
    return (
        // height={'800'}
        <Card >
            {/* 按钮 */}
            <div >
                <div className="Box">一、按钮</div>
                <div style={{ display:'flex',width:'1000px',justifyContent:'space-around' }}>
                    <Button >默认按钮</Button>
                    <Button type={'primary'}>主要按钮</Button>
                    <Button type={'success'}>成功按钮</Button>
                    <Button type={'info'}>信息按钮</Button>
                    <Button type={'warning'}>警告按钮</Button>
                    <Button type={'danger'} >危险按钮</Button>
                </div>
                <div className="Box">二、标签</div>
                <div className="Box">三、进度条</div>
                <div className="progress-box">
                    <Progress percentage={0}></Progress> 0
                    <Progress percentage={50} style={{marginTop:'20px'}}></Progress> 50
                    <Progress percentage={75} style={{marginTop:'20px'}}></Progress> 75
                    <Progress percentage={90} style={{marginTop:'20px'}}></Progress> 90
                </div>
            </div>
        </Card>
        
    )
}

export default Synthesis