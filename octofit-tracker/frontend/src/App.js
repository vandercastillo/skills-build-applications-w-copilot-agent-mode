
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from './assets/octofitapp-small.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" className="me-2" style={{height: '40px'}} />
            Octofit Tracker
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card mt-4">
              <div className="card-body">
                <h2 className="display-5 mb-3">Welcome to Octofit Tracker!</h2>
                <p className="lead">Track your activities, teams, workouts, and more with a modern, responsive interface.</p>
                <NavLink to="/activities" className="btn btn-primary me-2">View Activities</NavLink>
                <NavLink to="/leaderboard" className="btn btn-success me-2">Leaderboard</NavLink>
                <NavLink to="/teams" className="btn btn-info me-2">Teams</NavLink>
                <NavLink to="/users" className="btn btn-warning me-2">Users</NavLink>
                <NavLink to="/workouts" className="btn btn-danger">Workouts</NavLink>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
