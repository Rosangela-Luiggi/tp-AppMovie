
import { FcFilmReel } from "react-icons/fc";
import { grey } from '@mui/material/colors';
import { AppBar, Toolbar, Typography, Box } from "@mui/material";


const color = grey[900];
export default function Footer() {
  return (

    <AppBar position="static" sx={{ backgroundColor: color, mb: 0, justifyContent: "center", alignItems: "center" }} >
      <Box>
        <Toolbar variant="dense">

          <FcFilmReel />

          <Typography variant="h6" color="inherit" component="div" ml={1} fontSize={15}>
            AppMovies - By Rosy
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>

  );
}






