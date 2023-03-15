import React from 'react'
import '../../App.css';
import { featuresData } from '../../data/featuresData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const Features = () => {
    return (
        <div className='Features'>
            <Typography variant="h2" component="h3" className='heading-3'>
                 Discover advanced
                <span className='heading-4'>tracking features</span>
            </Typography>
            <div className='Features-text'>
                {featuresData.map((feature) => (
                    <Card sx={{ maxWidth: 345 }} className='featurecard'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={feature.image}
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                LEARN MORE
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
}
