import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const Navbar = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{justifyContent:'flex-end'}}>
         
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}

export default Navbar;


