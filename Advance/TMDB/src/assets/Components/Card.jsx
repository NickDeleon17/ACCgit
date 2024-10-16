import {Card as MuiCard, CardContent, CardMedia, Toolbar, Typography} from "@mui/material";

function Card ({ movie }){
    const posterUrl = movie.poster_path
    ?`https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://external-preview.redd.it/K0qpdVcMRY-yxpeTZMPR9_eZtB9d7KH_DT1zNgB_H5M.jpg?width=1080&crop=smart&auto=webp&s=36ac86939db936da2b09e10ae62a8318e643e024'


return(

    <MuiCard sx={{ maxWidth: 345, backgroundColor: 'transparent', boxShadow: '3px'}}>
        <CardMedia
            component="img"
            height="600"
            width="500"
            image={posterUrl}
            alt={movie.title}
            />
         <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={{color: '#646cff'}}>
                {movie.title}
            </Typography>
            <Typography variant="h6" sx={{ color: 'darkgray' }}>
                {movie.overview}
            </Typography>
            <br/>
            <Typography variant="body1" sx={{ color: '#81D8D0', fontWeight: 'bold' }}>
                Release Date:  {movie.release_date}
            </Typography>
            <Typography variant="body1" sx={{color: '#646cff', fontWeight:'bold'}}>
                Movie Rating: {movie.vote_average}
            </Typography>
    </CardContent>
    </MuiCard>
);
}

export default Card