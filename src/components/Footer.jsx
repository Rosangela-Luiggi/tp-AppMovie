
import { FcFilmReel } from "react-icons/fc";

import { AppBar, Toolbar, Typography} from "@mui/material";



export default function Footer() {
  return (
    <footer style={{with: '100%', padding: '100px', height: '500'}}>
      <AppBar position="static">
        <Toolbar variant="dense">
        
            <FcFilmReel/>

          <Typography variant="h6" color="inherit" component="div" ml={1} fontSize={15}>
           Movies
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}






