import React, { useState } from 'react';
import StudentForm from './StudentForm';

function StudentTable({ students, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleUpdate = (updatedStudent) => {
    onUpdate(editingId, updatedStudent);
    setEditingId(null);
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) =>
            student.id === editingId ? (
              <tr key={student.id}>
                <td colSpan="4">
                  <StudentForm
                    student={student}
                    onSubmit={handleUpdate}
                    onCancel={() => setEditingId(null)}
                  />
                </td>
              </tr>
            ) : (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <button onClick={() => setEditingId(student.id)}>Edit</button>
                  <button onClick={() => onDelete(student.id)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;