import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quote = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [setData]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">API Data</h1>
      <ul className="list-group">
        {data.map((item) => (
          <li key={item.id} className="list-group-item">
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quote;
