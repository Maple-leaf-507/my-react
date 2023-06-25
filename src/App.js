import './App.css';
import routers from './router';    // 路由文件
import { Routes, Route,useLocation } from 'react-router-dom';
import Layout from './components/selfCom/layOut';
function App() {
  const location = useLocation()
  return (
    <div className="App">
      {
        location.pathname.includes('selfComponents')?<Layout></Layout>:''
      }
      <Routes>
        {
          routers.map((item, index) => {
            if (item.children && item.children.length > 0) {
              return item.children.map((i, j) => {
                return (
                  <Route path={item.path + i.path} key={j} element={<i.components />}></Route>
                )
              })
            } else {
              return (
                <Route path={item.path} key={index} element={<item.components />}></Route>
              )
            }
          })
        }
      </Routes>
    </div>
  );
}

export default App;
