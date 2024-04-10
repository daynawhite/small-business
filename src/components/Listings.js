

// function createData(name, description, hours, address) {
//   return { name, description, hours, address };
// }

// const rows = [
//   createData(, '1302 S 1st St, Austin, TX 78704'),
//   createData(),
//   createData(),
//   createData(),
//   createData(),
// ];

// const Listings = () => {
//   return (
//     <div>Listings Page</div>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Name</TableCell>
    //         <TableCell align="right">Description</TableCell>
    //         <TableCell align="right">Hours</TableCell>
    //         <TableCell align="right">Address</TableCell>
    //         <TableCell align="right"></TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.description}</TableCell>
    //           <TableCell align="right">{row.hours}</TableCell>
    //           <TableCell align="right">{row.address}</TableCell>
    //           <TableCell align="right"></TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
//   );
// }

// export default Listings;

import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import businesses from "../businesses.json";

const Biz = (props) => {
  const id = useParams().id;
  const business = businesses.find((c) => c.id === Number(id));

  return (
    <Container maxWidth="sm" className="biz-container">
      <Paper className="biz-paper">
        <h2>{business.Name}</h2>
        {Object.keys(business).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${business[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Biz;