import React from 'react'
import '../../App.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Hero = () => {
    return (
        <div className='Hero'>
            <Typography variant="h3" component="h4" className='heading-1'>
                The easiest way
                <span className='heading-2'>to monitor and dispatch your vehicles</span>
            </Typography>
            <p className='inset-1'>We give you the power and performance of a complete fleet management system. Fleet owners
                gain a new level of<br/>
                control over their vehicles, drivers and fleet operating costs.</p>
            <Button variant="contained">Explore More</Button>
        </div>
    )
}

export default Hero