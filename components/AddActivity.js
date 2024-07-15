import React, { useState } from 'react';
import './styles.css';

function AddActivity() {
  const [activity, setActivity] = useState('');
  const [impact, setImpact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/add-activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ activity, impact }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <input
        type="text"
        placeholder="Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Impact"
        value={impact}
        onChange={(e) => setImpact(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddActivity;
