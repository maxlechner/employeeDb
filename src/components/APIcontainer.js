import React, { useState, useEffect } from "react";
import API from "../utils/API";


function APIcontainer() {
  const [employees, setEmployees] = useState([]);
  
    // componentDidMount() {
    //     this.randomUser();
    // }

    useEffect(() => {
      API.search()
        .then((res) => {
          if (res.data.length === 0) throw new Error("No results found.");
          if (res.data.status === "error") throw new Error(res.data.message);
  
          setEmployees(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);


    // filterUpButton = (event) => {

    //     event.preventDefault();
    //     let value = this.state.friendCounter;
    //     alert("Names are in ascending order")
    //     this.randomUser(this.state.result);
    // };

    // filterDownButton = event => {

    //     this.randomUser(this.state.result);
    //     alert("Names are in descending order")

    // }
    
    
      
      return (
        <div classname='card'>
          <h1>Employee list:</h1>

        <div className='card-body' style={{ display: "flex", flexWrap: "wrap" }}>
          {employees.map((employee) => (
              <div
              key={employee.phone}
              className='card-body'
              style={{ flex: "flex", maxWidth: "25%" }}
              >
                <img
                  alt='portrait'
                  src={employee.picture.large}
                  style={{ maxWidth: "300px", borderRadius: "7px" }}
                />
                <h3 className='card-text'>
                  {employee.name.first} {employee.name.last}
                </h3>
                <h5 className='card-text'>Age: {employee.dob.age}</h5>
                <h5 className='card-text'>Phone: {employee.phone}</h5>
                <h5 className='card-text'>{employee.location.country}</h5>
                <h5 className='card-text'>
                  <a href={employee.email}>Email</a>
                </h5>
            </div>
          ))}

        </div>

        </div>
      );
    
  }

export default APIcontainer;