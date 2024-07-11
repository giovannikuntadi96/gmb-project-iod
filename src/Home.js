import React from 'react';
import Button from 'react-bootstrap/Button';
import { BasicTable } from './component/BasicTable/BasicTable';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css'

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <br></br>
            <BasicTable />
            <br></br>
            <Button variant='warning' onClick={() => navigate('/message')}>Add New Message</Button>
        </>
    )
}

export default Home;
