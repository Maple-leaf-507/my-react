import Home from '../pages/home/index'
import Mine from '../pages/mine/index'
import Error from '../pages/error'

import Synthesis from '../components/synthesis/index'

// Basic
import Button from '../components/selfCom/basic/button/index'
import Tag from '../components/selfCom/basic/tag/index'
import Progress from '../components/selfCom/basic/progress/index'
import Badge from '../components/selfCom/basic/badge/index'
import Skeleton from '../components/selfCom/basic/skeleton/index'
import Switch from '../components/selfCom/basic/switch/index'

// Form
import Radio from '../components/selfCom/form/radio/index'
import Checkbox from '../components/selfCom/form/checkbox/index'
import Input from '../components/selfCom/form/input/index'
import Stepper from '../components/selfCom/form/stepper/index'
import Select from '../components/selfCom/form/select/index'
import Cascader from '../components/selfCom/form/cascader/index'
import Slider from '../components/selfCom/form/slider/index'
import TimePicker from '../components/selfCom/form/timePicker/index'
import DatePicker from '../components/selfCom/form/datePicker/index'

// Data
import Table from '../components/selfCom/data/table/index'
import Tree from '../components/selfCom/data/tree/index'
import Pagination from '../components/selfCom/data/pagination/index'

// Notice
import Alert from '../components/selfCom/notice/alert/index'
import Loading from '../components/selfCom/notice/loading/index'
import Message from '../components/selfCom/notice/message/index'
import MessageBox from '../components/selfCom/notice/messageBox/index'
import Notification from '../components/selfCom/notice/notification/index'

// Navigation
import NavMenu from '../components/selfCom/navigation/navMenu/index'
import Tabs from '../components/selfCom/navigation/tabs/index'
import Dropdown from '../components/selfCom/navigation/dropdown/index'
import Steps from '../components/selfCom/navigation/steps/index'

// Others
import Dialog from '../components/selfCom/others/dialog/index'
import Tooltip from '../components/selfCom/others/tooltip/index'
import Popover from '../components/selfCom/others/popover/index'
import Popconfirm from '../components/selfCom/others/popconfirm/index'
import Card from '../components/selfCom/others/card/index'
import Carousel from '../components/selfCom/others/carousel/index'
import Collapse from '../components/selfCom/others/collapse/index'
import Timeline from '../components/selfCom/others/timeline/index'

const routers = [
    {
        path: '/',
        name: '首页',
        components: Home
    },
    {
        path: '/mine',
        name: '个人中心',
        components:Mine
    },
    {
        path: '/selfComponents',
        name: '',
        // components:SelfComponents,
        children: [
            {
                path: '/',
                name:'按钮',
                components:Synthesis
            },
            {
                path: '/button',
                name:'按钮',
                components:Button
            },
            {
                path: '/tag',
                name:'标签',
                components:Tag
            },
            {
                path: '/progress',
                name:'进度条',
                components:Progress
            },
            {
                path: '/badge',
                name:'标记',
                components:Badge
            },
            {
                path: '/skeleton',
                name:'骨架屏',
                components:Skeleton
            },
            {
                path: '/switch',
                name:'开关',
                components:Switch
            },
            // Form
            {
                path: '/radio',
                name:'单选框',
                components:Radio
            },
            {
                path: '/checkbox',
                name:'多选框',
                components:Checkbox
            },
            {
                path: '/input',
                name:'输入框',
                components:Input
            },
            {
                path: '/stepper',
                name:'步进器',
                components:Stepper
            },
            {
                path: '/select',
                name:'选择器',
                components:Select
            },
            {
                path: '/cascader',
                name:'级联选择器',
                components:Cascader
            },
            {
                path: '/slider',
                name:'滑块',
                components:Slider
            },
            {
                path: '/timePicker',
                name:'时间选择器',
                components:TimePicker
            },
            {
                path: '/datePicker',
                name:'日期选择器',
                components:DatePicker
            },
            // data
            {
                path: '/table',
                name:'表格',
                components:Table
            },
            {
                path: '/tree',
                name:'树形控件',
                components:Tree
            },
            {
                path: '/pagination',
                name:'分页',
                components:Pagination
            },
            // notice
            {
                path: '/alert',
                name:'警告',
                components:Alert
            },
            {
                path: '/loading',
                name:'加载',
                components:Loading
            },
            {
                path: '/message',
                name:'消息提示',
                components:Message
            },
            {
                path: '/messageBox',
                name:'弹框',
                components:MessageBox
            },
            {
                path: '/notification',
                name:'通知',
                components:Notification
            },
            {
                path: '/navMenu',
                name:'导航菜单',
                components:NavMenu
            },
            {
                path: '/tabs',
                name:'标签页',
                components:Tabs
            },
            {
                path: '/dropdown',
                name:'下拉菜单',
                components:Dropdown
            },
            {
                path: '/steps',
                name:'下拉菜单',
                components:Steps
            },
            // others
            {
                path: '/dialog',
                name:'对话框',
                components:Dialog
            },
            {
                path: '/tooltip',
                name:'文字提示',
                components:Tooltip
            },
            {
                path: '/popover',
                name:'弹出框',
                components:Popover
            },
            {
                path: '/popconfirm',
                name:'气泡确认框',
                components:Popconfirm
            },
            {
                path: '/card',
                name:'卡片',
                components:Card
            },
            {
                path: '/carousel',
                name:'走马灯',
                components:Carousel
            },
            {
                path: '/collapse',
                name:'折叠面板',
                components:Collapse
            },
            {
                path: '/timeline',
                name:'时间线',
                components:Timeline
            }
            
        ]
    },
    {
        path: '*',
        name: '错误',
        components: Error
    }
]

export default routers