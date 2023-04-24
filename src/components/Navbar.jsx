import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid, styled } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import mainLogo from './../assets/images/daologo.jpg'

const Navbar = () => {

  const BoxWrapper = styled(Box)(() => ({
    '.appbar': {
      padding: '1.1rem 8rem',
      background: '#fff',
      color: '#f5274e',
    },
    '.launch-btn': {
      background: '#f5274e',
      textTransform: 'capitalize',
      fontSize: '17px',
      fontWeight: 500,
      borderRadius: '12px',
      padding: '6px 15px'
    },
    '.launch-btn:hover': {
      background: '#f5274e'
    }
  }));

  return (
    <BoxWrapper>
      <AppBar className='appbar' elevation={1} position="fixed">
        <Grid container spacing={0} >
          <Grid item xs={12} xl={6} md={6}>
            <Box>
              <img src={mainLogo} alt='DAO-LOGO' width={'50px'} />
            </Box>
          </Grid>
          <Grid item xs={12} xl={6} md={6} >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" className='launch-btn'> <RocketLaunchIcon style={{ fontSize: 'large', paddingRight: '8px' }} /> Launch your DAO</Button>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </BoxWrapper >
  );
}

export default Navbar;