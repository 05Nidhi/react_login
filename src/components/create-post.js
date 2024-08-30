import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import FormHelperText from '@mui/joy/FormHelperText';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Box from '@mui/material/Box';
import axios from "axios";

function CreatePost() {
  const navigate = useNavigate()
  const goBack = () => {
      navigate(-1);
  }
return (
  <div>
    <nav className="navbar">
      <div className="left-logo">
        Create Post
      </div>
      <div className="right-logo">
        <Button variant="contained" color="primary" onClick={() => goBack()} style={{ marginLeft: '1rem' }}>
        Go Back
        </Button>
      </div>
    </nav>
      <Box
      sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
      >
        <div>
          <h1 style={{textAlign: "center"}}>Create Post</h1>
          <FormControl sx={{marginBottom: "1rem"}}>
            <FormLabel>Title</FormLabel>
            <Textarea placeholder="Enter title of the post" minRows={1} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Enter description of your post" minRows={5} />
          </FormControl>
          <div className='top submit-buttom'>
              <Button variant="contained" color="primary" style={{marginLeft: "11rem"}}>
                create post
              </Button>
            </div>
        </div>
      </Box>
    </div>
  )
}
export default CreatePost