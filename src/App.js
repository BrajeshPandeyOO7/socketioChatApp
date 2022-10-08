import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bar from './Tools/Bar';
import ChatBox from './components/ChatBox';
import Status from './components/Status';
import FindFriend from './components/FindFriend';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
      {/* <Bar/> */}
      </header>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="status" element={<Status />}/>
            <Route exact path="calls" element={<FindFriend />}/> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
