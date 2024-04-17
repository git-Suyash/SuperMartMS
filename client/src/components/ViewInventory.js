import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewInventory() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getinventory');
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
        <th>product_name</th>
        <th>total_quantity</th>
      </tr>
      </thead>
      <tbody className='table-group-divider'>
    {data && data.map(product=>
      <tr key={product.product_id}>
        <td>{product.product_name}</td>
        <td>{product.total_quantity}</td>
      </tr>
    )}
    </tbody>
    </table>
    </div>
  );
}

export default ViewInventory;