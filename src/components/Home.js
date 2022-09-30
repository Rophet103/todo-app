import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import App from '../App';







const home = () => {
  return (
    <div>
        <Box>
            <AppBar position = 'static'>
                <Toolbar>
                    <IconButton color='inherit'>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>


    </div>
  )
}

export default home