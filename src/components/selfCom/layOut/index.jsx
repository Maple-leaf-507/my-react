import React,{useState} from "react";
import './index.scss'
import { useNavigate } from 'react-router-dom'

function Layout() {
    const navigate  = useNavigate();

    const sidebar = [
        {
            name: '介绍',
            children: [
                {
                    name: '首页',
                    path: ''
                }
            ]
        },
        {
            name: 'Basic',
            children: [
                {
                    name: 'Button',
                    path:'button',
                    label:'按钮'
                },
                {
                    name: 'Tag',
                    path:'tag',
                    label:'标签'
                },
                {
                    name: 'Progress',
                    path:'progress',
                    label:'进度条'
                },
                {
                    name: 'Badge',
                    path:'badge',
                    label:'标记'
                },
                {
                    name: 'Skeleton',
                    path:'skeleton',
                    label:'骨架屏'
                },
                {
                    name: 'Switch',
                    path:'switch',
                    label:'开关'
                }
            ]
        },
        {
            name: 'Form',
            children: [
                {
                    name: 'Radio',
                    path:'radio',
                    label:'单选框'
                },
                {
                    name: 'Checkbox',
                    path:'checkbox',
                    label:'多选框'
                },
                {
                    name: 'Input',
                    path:'input',
                    label:'输入框'
                },
                {
                    name: 'Stepper',
                    path:'stepper',
                    label:'步进器'
                },
                {
                    name: 'Select',
                    path:'select',
                    label:'选择器'
                },
                {
                    name: 'Cascader',
                    path:'cascader',
                    label:'级联选择器'
                },
               
                {
                    name: 'Slider',
                    path:'slider',
                    label:'滑块'
                },
                {
                    name: 'TimePicker',
                    path:'timePicker',
                    label:'时间选择器'
                },
                {
                    name: 'DatePicker',
                    path:'datePicker',
                    label:'日期选择器'
                }
            ]
        },
        {
            name: 'Data',
            children: [
                {
                    name: 'Table',
                    path:'table',
                    label:'表格'
                },
                {
                    name: 'Tree',
                    path:'tree',
                    label:'树形控件'
                },
                {
                    name: 'Pagination',
                    path:'pagination',
                    label:'分页'
                }
            ]
        },
        {
            name: 'Notice',
            children: [
                {
                    name: 'Alert',
                    path:'alert',
                    label:'警告'
                },
                {
                    name: 'Loading',
                    path:'loading',
                    label:'加载'
                },
                {
                    name: 'Message',
                    path:'message',
                    label:'消息提示'
                },
                {
                    name: 'MessageBox',
                    path:'messageBox',
                    label:'弹框'
                },
                {
                    name: 'Notification',
                    path:'notification',
                    label:'通知'
                }
            ]
        },
        {
            name: 'Navigation',
            children: [
                {
                    name: 'NavMenu',
                    path:'navMenu',
                    label:'导航菜单'
                },
                {
                    name: 'Tabs',
                    path:'tabs',
                    label:'标签页'
                },
                {
                    name: 'Dropdown',
                    path:'dropdown',
                    label:'下拉菜单'
                },
                {
                    name: 'Steps',
                    path:'steps',
                    label:'步骤条'
                }
            ]
        },
        {
            name: 'Others',
            children: [
                {
                    name: 'Dialog',
                    path:'dialog',
                    label:'对话框'
                },
                {
                    name: 'Tooltip',
                    path:'tooltip',
                    label:'文字提示'
                },
                {
                    name: 'Popover',
                    path:'popover',
                    label:'弹出框'
                },
                {
                    name: 'Popconfirm',
                    path:'popconfirm',
                    label:'气泡确认框'
                },
                {
                    name: 'Card',
                    path:'card',
                    label:'卡片'
                },
                {
                    name: 'Carousel',
                    path:'carousel',
                    label:'走马灯'
                },
                {
                    name: 'Collapse',
                    path:'collapse',
                    label:'折叠面板'
                },
                {
                    name: 'Timeline',
                    path:'timeline',
                    label:'时间线'
                }
            ]
        }
    ]
    
    const [sidebarIndex,setSidebarIndex] = useState([0,0])

    const clickItem2 = function (index, index2) {
        // console.log('sidebar', sidebar[index].children[index2])
        setSidebarIndex([index, index2])
        navigate('/selfComponents/' + sidebar[index].children[index2].path)
    }

    return (
        <div className="box">
            <div>
                {
                    sidebar.map((item, index) => {
                        return (
                            <div key={index} className="left">
                                <div className="left-name">{item.name}</div>
                                {
                                    item.children.map((i, j) => {
                                        return (
                                            <div key={j} className={sidebarIndex[0] === index && sidebarIndex[1] === j?"active-status":'left-name-2'} onClick={() => { clickItem2(index,j)}}>{i.name} { i.label}</div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Layout