import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Grid, styled } from '@mui/material';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PersonIcon from '@mui/icons-material/Person';
import mainLogo from './../assets/images/daologo.jpg'
import { Link } from 'react-router-dom';

const DaoNavbar = () => {

    const BoxWrapper = styled(Box)(() => ({
        '.appbar': {
            padding: '1.1rem 8rem',
            background: '#fff',
            color: '#f5274e',
            background: 'linear-gradient(rgb(254,39,78) 0%, rgba(49, 100, 250, 0) 100%);'
        },
        '.launch-btn': {
            background: '#fff',
            textTransform: 'capitalize',
            fontSize: '17px',
            fontWeight: 500,
            borderRadius: '12px',
            padding: '6px 15px',
            color: '#66727e'
        },
        '.launch-btn:hover': {
            background: '#f5274e'
        }
    }));

    return (
        <BoxWrapper>
            <AppBar className='appbar' elevation={0} position="fixed">
                <Grid container spacing={0} >
                    <Grid item xs={12} xl={6} md={6}>
                        <Link to='/dashboard'>
                            <img src={mainLogo} alt='DAO-LOGO' width={'50px'} />
                        </Link>

                    </Grid>
                    <Grid item xs={12} xl={6} md={6} >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" className='launch-btn'> Connect wallet  <PersonIcon style={{ fontSize: '23px', paddingLeft: '8px' }} /> </Button>
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
        </BoxWrapper >
    );
}

export default DaoNavbar;