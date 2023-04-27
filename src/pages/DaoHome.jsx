import React from 'react'
import DaoNavbar from '../components/DaoNavbar';
import { Box, Grid, styled, Typography } from '@mui/material';
import homeDao from './../assets/images/homeDao.svg'
import DaoComponent from '../components/DaoComponent';
import Explore from '../components/Explore';


const BoxWrapper = styled(Box)({
    marginTop: '4.7rem',
    padding: '0px 8rem',
    '.parent-image': {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    '.parent-home-content': {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '85px'
        // justifyContent: 'center'
    },
    '.main-title': {
        fontSize: '55px', color: '#f5274e',
        lineHeight: '60px',
        fontFamily: 'syne', fontWeight: 700
        , width: '350px'
    },
    '.description': {
        fontSize: '25px', color: '#000',
        lineHeight: '30px',
        fontWeight: 500, paddingTop: '10px'
    },
    '.explore-title': {
        fontSize: '28px', fontWeight: 700, color: '#323F4B', paddingTop: '40px'
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
                        <img src={homeDao} alt='home-dao' width={'60%'} style={{ scale: '1.5', marginTop: '16%' }} />
                    </Grid>
                </Grid>
                <Grid container columnSpacing={3.5} sx={{ marginTop: '-165px', position: 'relative' }}>
                    <Grid item xs={12} md={4} xl={4}>
                        <DaoComponent title='Create your DAO' description='Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code setup process.' />
                    </Grid>
                    <Grid item xs={12} md={4} xl={4}>
                        <DaoComponent title='Learn about DAOs' description='Find inspiration and learn about DAOs in our education portal designed for builders at every stage of the journey.' />
                    </Grid>
                    <Grid item xs={12} md={4} xl={4}>
                        <DaoComponent title='Build faster' description='Use our governance plugins to build a DAO, dApp, or anything you can imagine on the Aragon OSx protocol.'
                            isFlag={true} />
                    </Grid>
                </Grid>
                <Box sx={{ padding: '20px 0px' }}>
                    <Typography className='explore-title'>
                        Explore DAOs
                    </Typography>
                    <Grid container columnSpacing={3.5}>
                        <Grid item xs={12} md={6} xl={6}>
                            <Explore title='ADN'
                                subTitle='ans.dao.eth'
                                description='$ANS is the governance token of the Arweave Name Service (ANS) and   We collaborate, share resources'
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <Explore title='Burnt Toast Nation'
                                subTitle='burnttoastnation.dao.eth'
                                description='We are a nation of people who are aware that even the tiniest thing a major impact on the world we live.  We collaborate, share resources. and some dao.' />
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <Explore title='PrimeDAO'
                                subTitle='prime.dao.eth'
                                description='PrimeDAO is a DAO coordination hub aimed at unleashing DAO to DAO potential.' />
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <Explore title='zoomwatch'
                                subTitle='zoomwatch.dao.eth'
                                description='PrimeDAO is a DAO coordination hub aimed at unleashing DAO to DAO potential' />
                        </Grid>
                    </Grid>
                </Box>
            </BoxWrapper>

        </React.Fragment>
    )
}

export default DaoHome