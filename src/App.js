import './App.css';
import routers from './router';    // 路由文件
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        {
          routers.map((item, index) => {
            return (
              <Route path={item.path} key={index} element={<item.components />}></Route>
            )
          })
        }
      </Routes>
    </div>
  );
}

export default App;
