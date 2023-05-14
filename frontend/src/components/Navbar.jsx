import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Grid, styled } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { useNavigate } from 'react-router-dom';
import { scanForWallets } from '../utils/aehelper';
import Spinner from './Spinner';

const Navbar = () => {

  const navigate = useNavigate()
  const [isProgress, setProgress] = React.useState(false)
  const BoxWrapper = styled(Box)(() => ({
    '.appbar': {
      padding: '1.1rem 8rem',
      background: '#0C0F1A',
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
      <Box className='appbar'>
        <Grid container spacing={0} >
          <Grid item xs={12} xl={6} md={6}>
            <img src={"./logo.png"} alt='DAO-LOGO' width={'100px'} />
          </Grid>
          <Grid item xs={12} xl={6} md={6} >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={async () => {
                setProgress(true)
                window.walletAddress = await scanForWallets()
                let addr =  window.walletAddress
                window.walletAddressView = addr.substr(0,6) + '...' + addr.substr(addr.length - 4, 4)
                navigate('/dashboard')  
              }} variant="contained" className='launch-btn'> {isProgress && <Spinner />} {!isProgress && (<><RocketLaunchIcon style={{ fontSize: 'large', paddingRight: '8px' }} /> Launch your DAO</>)}</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BoxWrapper >
  );
}

export default Navbar;