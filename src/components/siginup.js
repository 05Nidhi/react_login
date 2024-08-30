import React, { useState } from 'react';
import './navbar.css';
import { TextField, FormControl, FormLabel, Button } from '@mui/material';
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [passwordError, setPasswordError] = useState([]);
    const [post, setPost] = useState(null);
    const [fieldError, setFieldError] = useState(null);
    const navigate = useNavigate()
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    }
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    }
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      validatePassword(newPassword);
    }
  
    const validatePassword = (password) => {
      const errors = [];
      if (password.length < 8 || password.length > 15) {
        errors.push("Password must be 8-15 characters long");
      }
      if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter");
      }
      if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter");
      }
      if (!/\d/.test(password)) {
        errors.push("Password must contain at least one digit");
      }
      if (!/[@.#$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character");
      }
      setPasswordError(errors);
      setIsPasswordValid(errors.length === 0);
    }
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:4000/accounts", {
          account: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
          }
        },
        {
          withCredentials: true
        }
      );
        if (response.status === 201) {
          setPost(response.data);
          setFieldError(null);
          navigate("/welcome");
        }
      } catch (error) {
        if (error.response.status === 422) {
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
            <div className='top'>
              <FormLabel component="legend">Enter your first name:</FormLabel>
              <div>
                <TextField
                  required
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                  onChange={handleFirstNameChange}
                  value={firstName}
                />
                {fieldError && fieldError.first_name && <div><span style={{ color: 'red' }}>{fieldError.first_name[0]}</span></div>}
              </div>
            </div>
            <div className='top'>
              <FormLabel>Enter your last name:</FormLabel>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    onChange={handleLastNameChange}
                    value={lastName}
                  />
                  {fieldError && fieldError.last_name && <div><span style={{ color: 'red' }}>{fieldError.last_name[0]}</span></div>}
                </div>
            </div>
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
                  {fieldError && fieldError.email && <div><span style={{ color: 'red' }}>{fieldError.email[0]}</span></div>}
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
              {!isPasswordValid && (
                <div>
                  <small style={{ color: 'red' }}>
                    {passwordError.map((error) => (
                      <div>{error}</div>
                    ))}
                  </small>
                </div>
              )}
            </div>
            <div className='top submit-buttom'>
              <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                Sign Up
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
    );
}
export default Signup;