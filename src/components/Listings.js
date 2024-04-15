

// import React from "react";
// import { Link } from 'react-router-dom'
// import { Card, CardContent, CardActions, Divider } from '@mui/material'
// import businesses from "../businesses.json";

// const Biz = () => {
//     return (
//         <div className="card-container">
//             {businesses.map((biz, idx) => (
//                 <Card key={idx} className="card">
//                     <CardContent className="text-gray">
//                         <span>{biz.Name.toUpperCase()}</span>
//                         <ul>
//                         <li>Name: {biz["Name"]}</li>
//                         {/* <li>Cylinders: {car["Cylinders"]}</li>
//                         <li>Displacement: {car["Displacement"]}</li>
//                         <li>Horsepower: {car["Horsepower"]}</li> */}
//                         </ul>
//                     </CardContent>
//                     <Divider />
//                     <CardActions style={{ color: 'mediumblue' }}>
//                         <Link to={`/Details/${biz.id}`}>See More Details</Link>
//                     </CardActions>
//                 </Card>
//             ))}
//         </div>
//     )
// };

// export default Biz;


import React from 'react';
import { Link } from 'react-router-dom'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import businesses from "../businesses.json";
import cookie from 'cookie';

 
const Listings = (props) => {
    const cookies = cookie.parse(document.cookie)
   
    return (
        
        <Container  
        // sx={{pt: }}
         maxWidth="lg" className="biz-container">
            {/* <h4>Welcome, {props.user.username}</h4> */}
                     
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {businesses.map((biz, idx) => (
                    <TableRow key={biz.id}>
                        <TableCell Link="Details">{biz["Name"]}</TableCell>
                        <TableCell>{biz["Description"]}</TableCell>
                        <TableCell>{biz["Address"]}</TableCell>
                        <TableCell>{biz["Hours"]}</TableCell>
                        {cookies.loggedIn ? 
                         <TableCell>
                            <DeleteIcon
                                // onClick={() => props.removebiz(idx)}
                                className="icon text-red" />
                        </TableCell>
                        : null }
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
      
    )
}

export default Listings