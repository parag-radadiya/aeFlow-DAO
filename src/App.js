import './App.css';
import Setup from './components/Setup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import DaoHome from './pages/DaoHome';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dao-homepage' element={<DaoHome />} />
        </Routes>
      </Router>
      {/* <Setup /> */}
    </div>
  );
}

export default App;
