import React from "react";
import './style.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Attendance from "./components/Attendance";
import TaskManagement from "./components/TaskManagement";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/attendance">Attendance</Link></li>
          <li><Link to="/tasks">Task Management</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/tasks" element={<TaskManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
