// In your React component

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleMarksGet = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/receive');
        // Assuming the response contains the fetched data
        const data = response.data;
        // Handle the fetched data as needed, such as setting state or logging
        console.log('Fetched data:', data);
        return data; // Return the fetched data if needed
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Throw the error to handle it in the calling code
      }
    };

    handleMarksGet();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Data from MongoDB:</h2>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
