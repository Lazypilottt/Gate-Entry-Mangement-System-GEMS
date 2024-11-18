import React, { useState } from "react";

function StudentsOutside() {
  const [students, setStudents] = useState([
    {
      name: "Rahul Sharma",
      ID: "12014567",
      category: "Student",
      date_time_of_exit: "12/11/2024, 10:00 AM",
      reason: "Medical Appointment",
    },
    {
      name: "Priya Verma",
      ID: "12014678",
      category: "Student",
      date_time_of_exit: "12/11/2024, 09:30 AM",
      reason: "Family Visit",
    },
  ]);

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="students-outside-container">
      <div className="container">
        <h2>Students Outside the Campus</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Category</th>
              <th>Date and Time of Exit</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.ID}</td>
                <td>{student.category}</td>
                <td>{student.date_time_of_exit}</td>
                <td>{student.reason}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsOutside;
