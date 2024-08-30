import React, { useState } from 'react';
import './navbar.css';
import { TextField, FormControl, FormLabel, Button } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fieldError, setFieldError] = useState(null);
    const navigate = useNavigate()
    const [post, setPost] = useState(null);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
    }
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:4000/login", {
          account: {
            email: email,
            password: password,
          }
        },
        {
          withCredentials: true
        }
      );
        if (response.status === 200) {
          setPost(response.data);
          setFieldError(null);
          navigate("/welcome");
        }
      } catch (error) {
        if (error.response.status === 401) {
          setFieldError(error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    };

    const goBack = () => {
      navigate(-1);
    }
  
    return (
      <div>
        <nav className="navbar">
            <div className="left-logo">
                Welcome
            </div>
            <div className="right-logo">
                <Button variant="contained" color="primary" onClick={() => goBack()}>
                    Go Back
                </Button>
            </div>
        </nav>
  
        <FormControl>
          <div className="label">
          {fieldError &&<div><span style={{ color: 'red' }}>{fieldError.error}</span></div>}
            <div className='top'>
              <FormLabel>Enter your email:</FormLabel>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </div>
            </div>
            <div className='top'>
              <FormLabel>Enter your password:</FormLabel>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    onChange={handlePasswordChange}
                    value={password}
                    type="password"
                  />
                </div>
            </div>
            <div className='top submit-buttom'>
              <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                Login
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
    );
}
export default Login;