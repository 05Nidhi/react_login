import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from '@mui/material';
import { ReactComponent as EditIcon } from '../assets/edit-icon.svg';

function Welcome() {
  const navigate = useNavigate()
  const goBack = () => {
      navigate(-1);
  }
  const goToCreatePost = () => {
      navigate("/create-post");
  }
return (
  <div>
    <nav className="navbar">
      <div className="left-logo">
        Welcome
      </div>
      <div className="right-logo">
        <EditIcon width="24" height="24" onClick={() => goToCreatePost()} style={{ cursor: 'pointer' }} />
        <Button variant="contained" color="primary" onClick={() => goBack()} style={{ marginLeft: '1rem' }}>
        Go Back
        </Button>
      </div>
    </nav>
    <div>
      <h1>Welcome to the website!</h1>
    </div>
  </div>
  )
}
export default Welcome
                    