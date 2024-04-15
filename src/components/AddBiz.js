
import React from 'react'
import { useState } from 'react';
import businesses from "../businesses.json";
// import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Container } from '@mui/material';
import '../App.css';
// import cookie from 'cookie';


const AddBiz = (props) => {

const [state, setState] = useState({
    Name: '',
    Description: '',
    Hours: '',
    Address: '',
})

const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...state }
    payload.id = businesses.length + 1
    props.addBiz(payload)
    setState({
        Name: '',
        Description: '',
        Hours: '',
        Address: '',
    })
}
console.log(props)

  return (
    <Container  
     maxWidth="lg" className="biz-container">
        <Box className="add-biz-form"
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
          id="standard-basic"
          variant="standard" 
          placeholder="Name" 
          name="Name"
          value={state.Name} 
          onChange={handleTextChange}/>
          <TextField 
          id="standard-basic" 
          variant="standard" 
          placeholder="Description" 
          name="Description"
          value={state.Description} 
          onChange={handleTextChange} />
          <TextField id="standard-basic" variant="standard" placeholder="Hours" name="Hours" value={state.Hours} onChange={handleTextChange} />
          <TextField id="standard-basic" variant="standard" placeholder="Address" name="Address" value={state.Address} onChange={handleTextChange}/>
          <Button variant="contained" onClick={handleSubmit} >Save</Button>

        </Box>
        </Container>
      );
};

export default AddBiz
    