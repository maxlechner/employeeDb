import React, { useState, useEffect } from "react";
import API from "../utils/API";


function APIcontainer() {
  const [employees, setEmployees] = useState([]);
  // const [all, setAll] = useState(false);
  
  useEffect(() => {
      API.search()
        .then((res) => {
          if (res.data.length === 0) throw new Error("No results found.");
          if (res.data.status === "error") throw new Error(res.data.message);

          setEmployees(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    
    function nameButton() {

      employees.sort();

    };

    function locationButton() {

      employees.sort();

    };
      
    return (
      
      <div classname='card'>
        <h1>Employee list:</h1>

        <p>
          Click one of the buttons below to filter the employees:
        </p>
        
        <button onClick={nameButton} type="button" className="btn btn-success">Order by name</button>
        <button onClick={locationButton} type="button" className="btn btn-warning">Order by location</button>

      <div className='card-body' style={{ display: "flex", flexWrap: "wrap" }}>
        {employees.map((employee) => (
            <div
            key={employee.phone}
            className='card-body'
            style={{ flex: "flex", maxWidth: "50%" }}
            >
              <img
                alt='employee portrait'
                src={employee.picture.large}
                style={{ maxWidth: "500px", borderRadius: "1px" }}
              />
              <h3 className='card-text'>
                {employee.name.first} {employee.name.last}
              </h3>
              <h5 className='card-text'>City: {employee.location.city}</h5>
              <h5 className='card-text'>Country: {employee.location.country}</h5>
              <h5 className='card-text'>Phone: {employee.phone}</h5>
              <h5 className='card-text'>Username: {employee.login.username}</h5>
              <h5 className='card-text'><a href={employee.email}>{employee.email}</a>
              </h5>
          </div>
        ))}

      </div>

      </div>
    );
    
  }

export default APIcontainer;