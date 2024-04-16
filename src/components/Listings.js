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
import cookie from 'cookie';

 
const Listings = (props) => {
    const cookies = cookie.parse(document.cookie)
   
    return (
        
        <Container  
         maxWidth="lg" className="biz-container">
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
                {props.businesses.map((biz, idx) => (
                    <TableRow key={biz.id}>
                        <TableCell>
                            <Link style={{ textDecoration: 'underline' }} to={`/Details/${biz.id}`}>{biz["Name"]}</Link>
                        </TableCell>
                        <TableCell>{biz["Description"]}</TableCell>
                        <TableCell>{biz["Address"]}</TableCell>
                        <TableCell>{biz["Hours"]}</TableCell>
                        {cookies.loggedIn ? 
                         <TableCell>
                            <DeleteIcon
                                onClick={() => props.removeBiz(idx)}
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