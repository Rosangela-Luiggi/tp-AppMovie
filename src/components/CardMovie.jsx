
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent } from '@mui/material';
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function CardMovie({ image, title, id}) {
 
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 450, mt: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          width="300"
          image={image}
          alt="poster de la peli"
        />
        <CardContent>
          <Typography gutterBottom variant="" component="div" fontSize="15px">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: "center", alignItems: "center"}}>
      <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
        <Button sx={{fontSize: "20px"}} size="medium" color="primary">
          <AiOutlineEye />
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}