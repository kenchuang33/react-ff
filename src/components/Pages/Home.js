import React from 'react';
import './Home.css';
import Cards from './Cards';
import Footer from './Footer';
import { Container, Typography, Button } from '@material-ui/core';


function Home() {
    return (
        <>
            <div className='section-container'>
                <br />
                <br />
                <br />
                <h1>看見台灣從台東開始</h1>
                
                <Button size="large" type="button" variant="contained" color="primary">GET STARTED</Button>
            </div>
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
