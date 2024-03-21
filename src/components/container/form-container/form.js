import React from 'react'
import { Stack, TextField, Button } from '@mui/material';

const form = () => {
  return (
    <div>
        <form style={{display: "flex", flexDirection : "column"}}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{
            justifyContent : "space-between",
            marginTop : "1rem"
        }}>
          <TextField label="Name" sx = {{
            background : "#DFDCF7", 
            borderRadius : "5px",
            height : "50px"
          }}/>
          <TextField label="Email"  />
          
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" sx={{
            justifyContent : "space-between",
            marginTop : "1rem"}}>
        <TextField label="Phone No." />
          <TextField label="Education"  />
          </Stack>
          <Stack direction="row" spacing={2}  sx={{
           
            marginTop : "1rem"}}> 
          <TextField label="Past Experience/Current Job"  />
          
          </Stack>
          <TextField label="Submit Resume/CV"  sx ={{
            marginTop: "1rem",
            marginBottom : "1rem"
          }}/>
          <Button variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  )
}

export default form