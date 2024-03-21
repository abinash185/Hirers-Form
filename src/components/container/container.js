import React from 'react';
import { Stack } from '@mui/material';
import Image from "../../assets/jobimage.svg"
import FormContainer from "./form-container/form.js"

const Container = () => {
  return (
    <Stack  direction="row"  alignItems="center" justifyContent={"center"} sx={{
        marginLeft: "auto",
        width : "80%",
        height:"80%",
         // Set the height of the stack to 100vh
    }}>
       <div style={{backgroundColor: "white" , height: '100%' , padding: "1%", borderRadius :"5px", width : "80%"}}>
        <FormContainer/>
      </div>
      <img src={Image} alt="your-alt-text" style={{ maxWidth: '100%', height: 'auto' }} />
    </Stack>
  );
};

export default Container;
