import React from 'react'
import DaoNavbar from '../components/DaoNavbar';
import { Box, Grid, styled, Typography } from '@mui/material';
import homeDao from './../assets/images/homeDao.svg'


const BoxWrapper = styled(Box)({
    marginTop: '4.7rem',
    padding: '0px 8rem',
    '.parent-image': {
        display: 'flex',
        justifyContent: 'center'
    },
    '.parent-home-content': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    '.main-title': {
        fontSize: '55px', color: '#f5274e',
        lineHeight: '60px',
        fontFamily: 'syne', fontWeight: 700
        , width: '350px'
    },
    '.description   ': {
        fontSize: '25px', color: '#f5274e',
        lineHeight: '30px',
        fontWeight: 500, paddingTop: '10px'
    }
})

const DaoHome = () => {
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box>
                    <DaoNavbar />
                </Box>
                <Grid container spacing={0}>
                    <Grid className='parent-home-content' item xs={12} md={6} xl={6}>
                        <Typography className='main-title'>
                            Explore the DAO World
                        </Typography>
                        <Typography className='description'>
                            Build your DAO, explore communities, and find inspiration for your project all in one place.
                        </Typography>
                    </Grid>
                    <Grid className='parent-image' item xs={12} md={6} xl={6}>
                        <img src={homeDao} alt='home-dao' width={'60%'} />
                    </Grid>
                </Grid>
            </BoxWrapper>

        </React.Fragment>
    )
}

export default DaoHome