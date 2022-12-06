import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import Attendance from './Attendance';
import Details from './Details';

function App() {

  return (
    <div className="App">
      <Router>
        <nav>
        <Link to = "/"></Link>
        </nav>
        <Routes>
          <Route path = "/" element = { <Home/> }></Route>
          <Route path = "/registration" element = { <Registration/> }></Route>
          <Route path = "/attendance" element = { <Attendance/> }></Route>
          <Route path = "/details" element = { <Details/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;