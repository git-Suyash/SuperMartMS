import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewEmployee() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getall');
        console.log(response);
        setData(response.data);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
      
    };
    fetchData();
  },[]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
    <table className='table table-striped-columns table-hover'>
    <thead>
    <tr>
        <th>emp_name</th>
        <th>emp_age</th>
        <th>emp_email</th>
        <th>emp_salary</th>
        <th>phone_no</th>
        <th>date_of_join</th>
        <th>emp_address</th>
      </tr>
      </thead>
      <tbody className='table-group-divider'>
    {data && data.map(employee=>
      <tr key={employee.emp_id}>
        <td>{employee.emp_name}</td>
        <td>{employee.emp_age}</td>
        <td>{employee.emp_email}</td>
        <td>{employee.emp_salary}</td>
        <td>{employee.phone_no}</td>
        <td> {employee.date_of_join}</td>
        <td>{employee.emp_address}</td>
      </tr>
    )}
    </tbody>
    </table>
    </div>
  );
}

export default ViewEmployee;
