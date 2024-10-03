import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Moviecard({doggy}) {
    const posterImage = `https://image.tmdb.org/t/p/w200${doggy.poster_path}`

  return (
    <Card sx={{ maxWidth: 345, height: "500px", overflow: "scroll" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={posterImage}
          alt="{doggy.title}"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {doggy.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {doggy.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
