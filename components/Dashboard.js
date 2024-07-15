import React, { useEffect, useState } from 'react';
import './styles.css';

function Dashboard() {
  const [ecoImpact, setEcoImpact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/eco-impact', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setEcoImpact(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Eco Impact Dashboard</h2>
      {ecoImpact ? (
        <div>
          <p>Carbon Footprint: {ecoImpact.carbonFootprint}</p>
          <p>Water Usage: {ecoImpact.waterUsage}</p>
          {/* Add more eco-impact metrics here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
import { Link } from 'react-router-dom';

function Dashboard() {
  // ... existing code

  return (
    <div>
      <h2>Eco Impact Dashboard</h2>
      {/* existing code */}
      <Link to="/add-activity">Add Activity</Link>
    </div>
  );
}

export default Dashboard;
