import { useState } from "react";
import "../App.css"; 
import "../components/css/PageButtons.css";
import HomePageEX from "./HomePageEX";
import HomePageSD from "./HomePageSD";
import HomePageAL from "./HomePageAL"; // ✅ Audit Logs component
import HomePageAR from "./HomePageAR";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

  
    return (
        <div className="homepage-container">
            {/* LEFT CONTAINER */}
            <div className="homepage-containerLeft">
                <img src="/images/userlogo.png" alt="userlogo" className="userlogo"/>
                <div className="userName">ADMIN</div>

                <button className="buttonHomePage" onClick={() => { setActiveSection("entranceExit"); setExpandedSection(null); }}>
                    Entrance/Exit POV 
                </button>
                <button className="buttonHomePage" onClick={() => { navigate("/account")}}>
                    Add/Remove
                </button>
                <button className="buttonHomePage" onClick={() => { setActiveSection("auditLogs"); setExpandedSection(null); }}>
                    Audit Logs
                </button>
                <button className="buttonHomePage" onClick={() => { setActiveSection("studentDetails"); setExpandedSection(null); }}>
                    Student Details
                </button>
                <button className="buttonHomePage" onClick={() => {navigate("/") }}>
                    Logout 
                </button>
            </div>
        </div>
    );
}

export default HomePage;
