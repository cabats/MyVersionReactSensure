import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../components/css/PageButtons.css";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin123") {
      console.log("Login successful! Redirecting...");
      navigate("/home"); 
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <img src="/images/logo.png" className="logo-image" />
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-12">
          <span>LOGIN</span>
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
