import React from 'react'
import { useEffect,useState } from "react";
import axios from "axios";
import "../components/css/ExternalSDPage.css"

const ExternalSDPage = () => {

  const [plateNumber, setPlateNumber] = useState("");
  const [driver,setDriver] = useState(null);
  const [error,setError] = useState("");
  const fetchDriverDetails = async () =>{
    try{
      const response = await axios.get(`http://localhost:8800/request/driver?plate_number=${plateNumber}`);
      setDriver(response.data);
      setError("");
      
    }catch(err){
      console.error("error",err);
      setDriver(null);
      setError("Driver not Found");
    }
  }
  return (
    <div className="mainContainer">
        <h1>Driver Information</h1>
        <div className="infoContainer">
            <div className="leftContainer">
              <div className="PictureBox">

              <input
                type="text"
                placeholder="Enter plate number"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
              />
              <button onClick={fetchDriverDetails}>Search</button>
                
                <img></img>

              </div>
              <div className="lowerBox">
                {/* Continue data */}
              {driver && (
                  <div>
                    <p><strong>Name:</strong> {driver.first_name} {driver.last_name}</p>
                    <p><strong>ID Number: </strong> {driver.id_number} </p>
                    <p><strong>Course:</strong> {driver.department}</p>
                  </div>
                )}
              </div>

              
            </div>
            <div className="rightContainer">
                
            </div>
        </div>
    </div>
    
  )
}

export default ExternalSDPage