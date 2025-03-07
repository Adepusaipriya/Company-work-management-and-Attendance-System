import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Company Dashboard</h2>
      <p>Welcome to the Company Work Management and Attendance System.</p>
      <ul>
        <li>
          <Link to='/attendance'>Manage Attendance</Link>
        </li>
        <li>
          <Link to='/tasks'>Manage Tasks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
