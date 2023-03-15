import React from 'react'
import '../../App.css';
import Typography from '@mui/material/Typography';
import Aboutimg from '../../assets/about-img.jpg'

const About = () => {
    return (
        <div className='About'>
            <div>
                <img src={Aboutimg} alt="" className='about-img' />
            </div>
            <div className='about-desc'>
                <Typography variant="h2" component="h3" className='heading-3'>
                    Improve your safety
                    <span className='heading-4'>on the road</span>
                </Typography>
                <p className='inset-2'>GPS tracking technology has come so far in the past few years. At GPS Vehicle Tracking System, our
                    mandate is to keep on top of all the changing technology, so we can pass that knowledge to you - our
                    valued customers. If you're
                    curious about GPS trackers, you've come to the right place. Not only do we offer fleet tracking and
                    vehicle tracking
                    options, but we also have an entire line of personal GPS tracking devices available. Our line of GPS
                    tracking devices is extensive, but we're happy to help you find the best option for any vehicle that you
                    want to track.
                </p>
            </div>
        </div>
    )
}

export default About