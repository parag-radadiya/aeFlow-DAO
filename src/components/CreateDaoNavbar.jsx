import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Grid, styled } from '@mui/material';
import user from './../assets/images/1.jpg';
import Avatar from '@mui/material/Avatar';
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


const BoxWrapper = styled(Box)(() => ({
    '.appbar': {
        padding: '1.1rem 2.5rem',
        background: '#F5F7FA',
        color: '#f5274e',
        // background: 'linear-gradient(rgb(254,39,78) 0%, rgba(49, 100, 250, 0) 100%);'
    },
    '.back-dao-title': {
        background: '#fff',
        color: '#66727e',
        fontSize: '17px',
        textTransform: 'none',
        fontWeight: 600
    },
    '.back-dao-title:hover': {
        background: '#fff'
    },
    '.dao-btn': {
        background: '#fff',
        textTransform: 'capitalize',
        fontSize: '17px',
        fontWeight: 500,
        borderRadius: '12px',
        padding: '6px 15px',
        color: '#66727e'
    },
    '.dao-btn:hover': {
        background: '#fff'
    },
    '.back-title:hover': {
        background: '#fff'
    }
}));

const CreateDaoNavbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }
    return (
        <BoxWrapper>
            <AppBar className='appbar' elevation={0} position="fixed">
                <Grid container spacing={0} >
                    <Grid item xs={12} xl={6} md={6}>
                        <Box>
                            <Button variant="contained" className='back-dao-title' disableElevation> <Button onClick={handleClick} sx={{ padding: '10px', background: '#F5F7FA', borderRadius: 3, marginRight: '10px' }} ><AiOutlineLeft color='#66727e' /></Button> Create your DAO </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} xl={6} md={6} >
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" className='dao-btn' disableElevation > 0xac6...f8A5 <Avatar alt="Remy Sharp" src={user} sx={{ width: '24px', height: '24px', marginLeft: '10px' }} /> </Button>
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
        </BoxWrapper >
    );
}

export default CreateDaoNavbar;