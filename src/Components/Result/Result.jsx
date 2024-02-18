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
        setData(data)
        return data; // Return the fetched data if needed
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Throw the error to handle it in the calling code
      }
    };

    handleMarksGet();
  }, []);


  return (
    <div>
    <h2>Data from MongoDB:</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>UID</th>
          <th>Section</th>
          <th>MarksOneSub</th>
          <th>MarksSecSub</th>
          <th>MarksThirSub</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.UID}</td>
            <td>{item.Section}</td>
            <td>{item.MarksOneSub}</td>
            <td>{item.MarksSecSub}</td>
            <td>{item.MarksThirSub}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Result;
