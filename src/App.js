import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  async function fetchData() {
    const response = await fetch('https://api.github.com/users/diegoturco/repos');
    const data = await response.json();
    setRepositories(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}
