
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent} from '@mui/material';
import { AiOutlineEye } from "react-icons/ai";

export default function CardMovie({ image, title }) {
    console.log(image)
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 450, mt: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          width="300"
          image={image}
          alt="poster de la peli"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" fontSize="15px">
            {title}
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