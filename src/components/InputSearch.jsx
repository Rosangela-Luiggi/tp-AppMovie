
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputSearch(onSearch) {
 
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 15, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Pelicula" variant="standard"  onChange={e => onSearch(e)}/>
    </Box>
  );
}

