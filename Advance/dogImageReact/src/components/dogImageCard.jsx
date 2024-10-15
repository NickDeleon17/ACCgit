import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material/';

export default function DogImageCard({imagePath}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Some type of dog
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            It's random dog is displayed here when you click the button
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
