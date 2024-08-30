import './navbar.css';
import {Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate()

  const gotToSignUp = () => {
    navigate("/signup");
  }

  const goToLogin = () => {
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar">
        <div className="left-logo">
          Welcome
        </div>
        <div className="right-logo">
          <Button variant="contained" color="primary" onClick={() => gotToSignUp()}>
            Sign Up
          </Button>
          <Button variant="contained" color="primary" style={{ marginLeft: '10px' }} onClick={() => goToLogin()}>
            Login
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Dashboard;
