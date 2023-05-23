
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent} from '@mui/material';
import { AiOutlineEye } from "react-icons/ai";

export default function CardMovie(image, name) {
    
  return (
    <Card sx={{ maxWidth: 220, mt: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="poster de la peli"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <AiOutlineEye/>
        </Button>
      </CardActions>
    </Card>
  );
}