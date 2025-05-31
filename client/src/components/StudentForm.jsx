import React, { useState } from 'react';

function StudentForm({ student, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    student || { name: '', email: '', course: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default StudentForm;