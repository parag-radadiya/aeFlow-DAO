import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Grid, Typography, styled } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import daomain from './../assets/images/daomain.png';
import Divider from '@mui/material/Divider';
import Setup from '../components/Setup';
import Voting from '../components/Voting';
import votting1 from './../assets/images/votting1.png'
import votting2 from './../assets/images/votting2.png'
import plugins1 from './../assets/images/plugins1.png'
import plugins2 from './../assets/images/plugins2.png'
import DaoComponent from '../components/DaoComponent';



const BoxWrapper = styled(Box)({
    '.launch-btn': {
        background: '#f5274e',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '12px',
        padding: '6px 15px'
    },
    '.launch-btn:hover': {
        background: '#f5274e'
    },
    '.dao-btn': {
        border: '2px solid #f5274e',
        background: '#fff', color: '#f5274e',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '12px',
        padding: '6px 15px'
    },
    '.learn-btn': {
        border: '2px solid #f5274e',
        background: '#fff', color: '#f5274e',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500, marginTop: '20px',
        borderRadius: '12px',
        padding: '6px 15px'
    },
    '.parent-btn-box': {
        paddingTop: '20px',
        display: 'flex', gap: '10px'
    },
    '.parent-img': {
        display: 'flex', justifyContent: 'center',
        padding: '20px',
    },
    '.parent-title': {
        padding: '13px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    '.argon-title': {
        fontSize: '32px',
        fontWeight: 500,
        lineHeight: '42px',
        color: '#f5274e'
    },
    '.argon-description': {
        fontSize: '46px',
        fontWeight: 300,
        color: '#f5274e',
        lineHeight: '50px', marginTop: '15px',
    },
    '.parent-voting': {
        display: 'flex',
        gap: '24px',
        padding: '2rem 8rem'
    },
    '.leading-title': {
        fontSize: '44px', lineHeight: '50px', textAlign: 'center',
        color: '#f5274e'
    },
    '.leading-description': {
        fontSize: '16px', lineHeight: '15px',
        color: '#f5274e', textAlign: 'center', padding: '10px'
    }
})


const Home = () => {

    return (
        <React.Fragment>
            <Box>
                <Navbar />
            </Box>
            <BoxWrapper>
                <Divider orientation="vertical" flexItem>
                    VERTICAL
                </Divider>
                <Box sx={{ marginTop: '5.30rem' }}>
                    <Grid container spacing={0} sx={{ padding: '0px 8rem' }}>
                        <Grid item xs={6} md={7} xl={7} className='parent-title'>
                            <Typography sx={{ fontSize: '90px', fontFamily: 'Syne', lineHeight: '90px', color: '#f5274e' }}>
                                Build Better, Together
                            </Typography>
                            <Typography sx={{ fontSize: '23px', lineHeight: '32px', marginTop: '19px', color: '#f5274e' }}>
                                Launch your DAO on the most user-friendly tech stack and
                                experiment with governance at the speed of software
                            </Typography>
                            <Box className='parent-btn-box'>
                                <Button variant="contained" className='launch-btn' disableElevation> <RocketLaunchIcon style={{ fontSize: 'large', paddingRight: '8px' }} /> Launch your DAO</Button>
                                <Button variant="contained" className='dao-btn' disableElevation> What is DAO?  </Button>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={5} xl={5} className='parent-img'>
                            <img src={daomain} alt='dao-main' width={'80%'} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={12} xl={12} sx={{ padding: '2rem 8rem' }}>
                            <Typography className='argon-title'>
                                Aragon App <Button variant='contained' size='sm' sx={{ p: 0, color: '#f5274e', borderRadius: '10px', border: '2px solid #f5274e', background: '#fff' }} disableElevation> new</Button>
                            </Typography>
                            <Typography className='argon-description'>
                                DAO creation and management platform with no coding required
                            </Typography>
                            <Button variant="contained" className='learn-btn' disableElevation> Learn more  </Button>
                        </Grid>
                    </Grid>
                    <Box>
                        <Setup />
                    </Box>
                    <Box className='parent-voting'>
                        <Voting title="Governance made easy. Making proposals and casting votes is easy, so members can participate with no barriers to entry."
                            image={votting1}
                        />
                        <Voting title="One home for your DAO. Members can onboard to your DAO quickly because they'll find everything they need in your DAO Dashboard."
                            image={votting2}
                        />
                    </Box>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={12} xl={12} sx={{ padding: '2rem 8rem' }}>
                            <Typography className='argon-title'>
                                Aragon OSx <Button variant='contained' size='sm' sx={{ p: 0, color: '#f5274e', borderRadius: '10px', border: '2px solid #f5274e', background: '#fff' }} disableElevation> new</Button>
                            </Typography>
                            <Typography className='argon-description'>
                                Modular protocol with security and flexibility at its core
                            </Typography>
                            <Button variant="contained" className='learn-btn' disableElevation> Learn more  </Button>
                        </Grid>
                    </Grid>

                    <Box className='parent-voting'>
                        <Voting title="Build custom DAOs with plugins. Build, install, upgrade, and uninstall plugins to customize governance and create adaptable organizations."
                            image={plugins1}
                        />
                        <Voting title="Unlimited potential. The governance logic can be extended indefinitely, allowing for use cases we can't yet imagine today."
                            image={plugins2}
                        />
                    </Box>
                    {/* ThisParts are create DAO */}
                    <Box sx={{
                        padding: '3.5rem 8rem', backgroundImage: 'linear-gradient(360deg, #f5274e 47%, white 50%)',
                    }}>
                        <Box sx={{ paddingBottom: '25px' }}>
                            <Typography className='leading-title'>
                                Leading DAOs built on Aragon
                            </Typography>
                            <Typography className='leading-description'>
                                Learn how reputable high TVL projects secure their treasury with AragonOS.
                            </Typography>
                        </Box>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} xl={4}>
                                <DaoComponent title={'Create your DAO'} description='We are a nation of people who are aware that even the tiniest thing can make a major impact on the world we live.' btnTitle='Create your Dao' />
                            </Grid>
                            <Grid item xs={4} md={4} xl={4}>
                                <DaoComponent title={'Create your DAO'} description='We are a nation of people who are aware that even the tiniest thing can make a major impact on the world we live.' btnTitle='Create your Dao' />
                            </Grid>
                            <Grid item xs={4} md={4} xl={4}>
                                <DaoComponent title={'Create your DAO'} description='We are a nation of people who are aware that even the tiniest thing can make a major impact on the world we live.' btnTitle='Create your Dao' />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </BoxWrapper>

        </React.Fragment >
    )
}

export default Home