import { useState, useEffect } from "react";
import Header from "../components/header.js";
import axios from "axios";

function AddNewEmployee() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [salary, setSalary] = useState('');
  const [dateOfJoin, setDateOfJoin] = useState('');
  const [address, setAddress] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(null);

  async function sendData(e) {
    e.preventDefault();
    const newEmployee = { id, age, name, email, phone, dateOfJoin, salary, address }
    let data = JSON.stringify(newEmployee);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/addemp',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
    try {
      const response = (await axios.request(config));
      const responseJson = response.JSON;
      setSuccess = responseJson.message;
      console.log(success);
      setId('');
      setName('');
      setAge('');
      setEmail('');
      setPhone('');
      setSalary('');
      setDateOfJoin('');
      setAddress('');
      setSuccess('');
    } catch (error) {
      setError(error);
      console.log(error);
      setId('');
      setName('');
      setAge('');
      setEmail('');
      setPhone('');
      setSalary('');
      setDateOfJoin('');
      setAddress('');
      setSuccess('');
    }
  }

  return (
    <div>
      <Header />
      <div className="container-fluid mt-5">
        <h1 className="mb-3">Add New Employee</h1>
        <div className="container-lg shadow-none p-3 mb-5 bg-body-tertiary rounded">
          <form onSubmit={sendData} className="row gy-2 gx-3 align-items-center form">
            <div className="col-auto">
              <label htmlFor="id" className="col-sm-2 col-form-label">ID:</label>
              <input type="number" className="form-control" id="id" onChange={(e) => setId(e.target.value)} value={id} />
            </div>

            <div className="col-auto">
              <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
              <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="col-auto">
              <label htmlFor="age" className="col-sm-2 col-form-label">Age:</label>
              <input type="number" className="form-control" id="age" onChange={(e) => setAge(e.target.value)} value={age} />
            </div>

            <div className="col-auto">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
              <input type="number" className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
            </div>

            <div className="col-auto">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
              <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div className="col-auto">
              <label htmlFor="salary" className="col-sm-2 col-form-label">Salary:</label>
              <input type="number" className="form-control" id="salary" onChange={(e) => setSalary(e.target.value)} value={salary} />
            </div>

            <div className="col-auto">
              <label htmlFor="dateOfJoin" className="col-sm-2 col-form-label">Date of Join:</label>
              <input type="date" className="form-control" id="dateOfJoin" onChange={(e) => setDateOfJoin(e.target.value)} value={dateOfJoin} />
            </div>

            <div className="col-auto">
              <label htmlFor="address" className="col-sm-2 col-form-label">Address:</label>
              <textarea className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} value={address}></textarea>
            </div>

            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewEmployee;