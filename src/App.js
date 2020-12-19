import './App.css';
import SideBar from './component/SideBar/SideBar';
import MainPage from './component/Mainpage/MainPage';

import HelloToast from "./component/HelloToast/HelloToast";
function App() {

  return (
    <div className="App">
      <HelloToast/>
     <SideBar/>
     <MainPage/>
    </div>
  );
}

export default App;
