import React from 'react'
import "../App.css"; 
import "../components/css/PageButtons.css";
import { useNavigate } from 'react-router-dom';
const navBox = () => {

    const navigate = useNavigate();

    const handleOpenNewWindow = () => {
        const width = window.screen.availWidth;
        const height = window.screen.availHeight;
        window.open('/info', '_blank', `width=${width},height=${height},top=0,left=0`);
    };

  return (

            <div className="homepage-containerLeft">
                <img src="/images/userlogo.png" alt="userlogo" className="userlogo"/>
                <div className="userName">ADMIN</div>

                <button className="buttonHomePage" onClick={() => {navigate("/home") }}>
                    Entrance/Exit POV 
                </button>
                <button className="buttonHomePage" onClick={() => { navigate("/account")}}>
                    Add/Remove
                </button>
                <button className="buttonHomePage" onClick={() => { navigate("/audit") }}>
                    Audit Logs
                </button>
                <button className="buttonHomePage" onClick={() => { navigate('/details'), handleOpenNewWindow()}}>
                    Student Details
                </button>
                <button className="buttonHomePage" onClick={() => {navigate("/") }}>
                    Logout 
                </button>
            </div>
        
  )
}

export default navBox