import React from 'react'
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';


const Biz = (props) => {
    const {id} = useParams()
    console.log(props)
    const biz = props.businesses.find(b => b.id == id)
    console.log(biz)

    return (
        <Container maxWidth="sm" className="biz-container">
                <h1>{biz.Name}</h1>
                <h2>{biz.Address}</h2>
                <h2>{biz.Hours}</h2>
                <p>{biz.Description}</p>
        </Container>
    )
};

export default Biz;