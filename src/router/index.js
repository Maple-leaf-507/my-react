import Home from '../pages/home/index'
import Mine from '../pages/mine/index'
import Error from '../pages/error'

const routers = [
    {
        path: '/',
        name: '首页',
        components:Home
    },
    {
        path: '/mine',
        name: '个人中心',
        components:Mine
    },
    {
        path: '/error',
        name: '错误',
        components:Error
    },
]

export default routers