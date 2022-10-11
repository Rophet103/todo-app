import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link'

const Home = () => {
  return (
    <div>
        <Box>
            <AppBar position = 'static'>
                <Toolbar>
                    <Typography variant='h6' component='div' gutterButtom >
                        OmololaTodoApp
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

        <Stack spacing={15} direction="row" sx={{marginTop:'20px', display:'flex', justifyContent:'center'} }>
        <Link href='/' underline='none'>
        <Button variant="contained" >
          <Typography variant='BUTTON TEXT'>List of Tasks</Typography>
        </Button>
        </Link>

        <Link href='/create' underline='none'>
        <Button variant="contained" >
          <Typography variant='BUTTON TEXT'> Add New Task</Typography>
        </Button>
        </Link>
        
         
    </Stack>


    </div>



  )
}

export default Home