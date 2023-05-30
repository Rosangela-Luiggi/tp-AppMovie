import * as React from 'react';
import { Box, Typography, Modal  } from "@mui/material";
import ReactPlayer from 'react-player';




export default function ModalTrailer({video}) {
  
  const rootRef = React.useRef(null);
  return (
    <div>
       <Box
      sx={{
        height: 400,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: 'relative',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Trailer Oficial
          </Typography>
          <Box sx={{mx: "25px", mt: "0"}} >
          <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video}`}
          
        />
         
        </Box>
        </Box>
      </Modal>
    </Box>
      
    </div>
  );
}