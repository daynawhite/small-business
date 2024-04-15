import React from 'react'
import { Container, Paper, Chip } from '@mui/material';

const Biz = (props) => {
    const id = props.match.params.id
    const biz = props.businesses.find(b => b.id == id)

    return (
        <Container maxWidth="sm" className="biz-container">
            <Paper className="biz-paper">
                <h2>{biz.name}</h2>
                {
                    Object.keys(biz).map((key, idx) => {
                        return <Chip label={`${key}: ${biz[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
};

export default Biz;