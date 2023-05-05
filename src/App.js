import './App.css';
import Setup from './components/Setup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import DaoHome from './pages/DaoHome';
import BuildDaoPage from './pages/BuildDaoPage';
import ProposalForm from './pages/ProposalForm';
import VotingPage from './pages/VotingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dao-homepage' element={<DaoHome />} />
          <Route exact path='/create-dao' element={<BuildDaoPage />} />
          <Route exact path='/proposal' element={<ProposalForm />} />
          <Route exact path='/vote' element={<VotingPage />} />
        </Routes>
      </Router>
      {/* <Setup /> */}
    </div>
  );
}

export default App;
