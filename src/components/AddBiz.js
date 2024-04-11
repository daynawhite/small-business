
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import { Button, TextField, 
    // Container, Box, Input, Dialog, 
    DialogContent, DialogTitle } from '@mui/material';
import cookie from 'cookie';
import React, { Component, Fragment } from 'react'



// const AddBiz = () => {

// //       const handleTextChange = (e) => {
// //         const { name, value } = e.target;
// //         setState((prevState) => {
// //           return {
// //             ...prevState,
// //             [name]: value,
// //           };
// //         });
// //       };
    


// return (
//   <div className="App">
//     <Container maxWidth="sm">
//       <form className="login-form" 
//     //   onSubmit={login}
//       >
//         <TextField
//           required
//         //   onChange={handleTextChange}
//         //   value={state.username}
//         //   name="username"
//         //   label="Username"
//         //   type="text"
//         />
//         <TextField
//           required
//         //   onChange={handleTextChange}
//         //   value={state.password}
//         //   name="password"
//         //   label="Password"
//         //   type="password"
//         />
//         <Button
//           type="submit"
//           className="login-button"
//           variant="contained"
//           color="primary"
//         >
//           Save
//         </Button>
//       </form>
//     </Container>
//   </div>
// )
// }

// export default AddBiz;


// const ariaLabel = { 'aria-label': 'description' };

let state = {
    Name: '',
    Description: '',
    Hours: '',
    Address: '',
}

const handleSubmit = (e) => {
    e.preventDefault()
    // const payload = { ...state }
    // payload.id = businesses.length + 1

    // props.addCar(payload)
}

const AddBiz = () => {
  return (
    <Fragment>
    {/* <div style={{ textAlign: 'center' }}>
        <h1>Add Business:</h1>
        <Button
            variant="contained"
            className="add-car"
            // onClick={this.toggleDialog}
        >
            Add Car
        </Button>
    </div> */}
    <div>
        {/* <Dialog open={this.state.open} onClose={this.toggleDialog} > */}
            <DialogTitle>Add Business</DialogTitle>
            <DialogContent>
                <form 
                    // onSubmit={this.handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                    <TextField 
                        id="Name" 
                        placeholder="Name" 
                        // value={this.state.name} 
                        // onChange={handleTextChange} 
                        required />
                    <TextField 
                        id="Description" 
                        placeholder="Description" 
                        // value={this.state.mpg} 
                        // onChange={this.handleTextChange} 
                        required />
                    <TextField 
                        id="Hours" 
                        placeholder="Hours" 
                        // value={this.state.cylinders} 
                        // onChange={this.handleTextChange} 
                        required />
                    <TextField 
                        id="Address" 
                        placeholder="Address" 
                        // value={this.state.horsepower} 
                        // onChange={this.handleTextChange} 
                        required />
                    <br />
                    <Button variant="contained" color="primary" type="submit">Save</Button>
                </form>
            </DialogContent>
        {/* </Dialog> */}
    </div>
    </Fragment>
  );
};

export default AddBiz
    