import React, { useState } from "react";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [employee, setEmployee] = useState("");

  const handleCheckIn = () => {
    if (employee) {
      setAttendance([...attendance, { name: employee, status: "Checked In", time: new Date().toLocaleTimeString() }]);
      setEmployee("");
    }
  };

  const handleCheckOut = (index) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index].status = "Checked Out";
    updatedAttendance[index].time = new Date().toLocaleTimeString();
    setAttendance(updatedAttendance);
  };

  return (
    <div>
      <h2>Attendance Management</h2>
      <input 
        type="text" 
        placeholder="Enter Employee Name" 
        value={employee} 
        onChange={(e) => setEmployee(e.target.value)} 
      />
      <button onClick={handleCheckIn}>Check In</button>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            {record.name} - {record.status} at {record.time}
            {record.status === "Checked In" && (
              <button onClick={() => handleCheckOut(index)}>Check Out</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
