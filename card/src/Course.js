import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Course({ image, title, description }) {
    return (
        <div>
            <Card >
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    title="kurslarım"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}

export default Course