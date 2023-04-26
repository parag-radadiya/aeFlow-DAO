import React from 'react'
import Dao from '../components/Dao';
import { Box, Grid, styled, Avatar, Stack } from '@mui/material'
import Creater from '../components/Creater';
import creater1 from './../assets/images/creater1.png'
import creater2 from './../assets/images/creater2.jpeg'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HiUserGroup } from 'react-icons/hi';
import icon from './../assets/images/1.jpg';
import { RiShareBoxLine } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';

const BoxWrapper = styled(Box)({
    margin: '0px 8rem',
    '.member-card': {
        border: '2px solid #f5274e', borderRadius: '12px',
        padding: '24px'
    },
    '.info-card': {
        border: '2px solid #f5274e', borderRadius: '12px',
        padding: '24px'
    },
    '.icon-btn': {
        background: '#F5F8FF', borderRadius: '12px',
        border: '1px solid #f5274e', color: '#f5274e'
    },
    '.name-btn': {
        background: '#f5274e', borderRadius: '12px',
        border: '1px solid #f5274e', color: '#fff',
        fontWeight: '700', textTransform: 'none', fontSize: '16px'
    },
    '.parent-member': {
        display: 'flex', justifyContent: 'space-between'
    },
    '.member-title': {
        fontSize: '32px',
        fontWeight: 700,
        paddingTop: '35px', color: '#323F4B'
    },
    '.token': {
        fontSize: '16px',
        fontWeight: 500,
        color: '#616E7C'
    },
    '.detail-description': {
        fontSize: '14px', display: 'flex',
        fontWeight: 500,
        color: '#616E7C'
    },
    '.text-token': {
        fontWeight: 700,
        color: '#52606D'
    },
    '.text-token:hover': {
        color: '#f5274e'
    },
    '.parent-stack': {
        display: 'flex',
        justifyContent: 'space-between',
    },
    '.see-btn': {
        color: '#52606D',
        fontWeight: 700, fontSize: '16px',
        background: '#fff',
        border: '2px solid #f5274e', borderRadius: '12px',
        textTransform: 'none',
        marginTop: '16px'
    },
    '.share': {
        fontSize: '18px', paddingLeft: '10px'
    }, '.share:hover': {
        color: '#f5274e'
    },
    '.see-btn:hover': {
        background: '#fff',
    },
    '.parent-grid-member': {
        padding: '30px 0px'
    }
})


const Dashboard = () => {
    return (
        <React.Fragment>
            <BoxWrapper>

                <Box sx={{ margin: '30px 0px' }}>
                    <Dao />
                </Box>
                <Box sx={{ padding: '0px 8rem' }}>
                    <Grid container columnSpacing={{ md: 4, xl: 3.9 }}>
                        <Grid item xs={12} md={6} xl={6}>
                            <Creater title='Create your first proposal'
                                image={creater1}
                                description='Get your community involved in the decision-making process. Learn more in our proposal guide'
                                btnTitle='Create Proposal'
                            />
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <Creater title='Initiate a token transfer'
                                image={creater2}
                                description='Ready to distribute tokens or send funds? Initiate a token transfer here. For ideas on how to distribute your community s token'
                                btnTitle='Initiate transfer'
                            />
                        </Grid>
                    </Grid>

                    {/* test */}

                    <Grid className='parent-grid-member' container columnSpacing={{ md: 4, xl: 3.2 }} >
                        <Grid item xs={12} md={4} xl={4}>
                            <Card className='member-card' elevation={0} >
                                <Box className='parent-member'>
                                    <Button className='icon-btn' variant='contained' disableElevation>
                                        <HiUserGroup style={{ color: '#f5274e', padding: '5px', fontSize: '18px' }} />
                                    </Button>
                                    <Button className='name-btn' variant='contained' disableElevation>
                                        Add member
                                    </Button>
                                </Box>
                                <Typography className='member-title'>
                                    1 Members
                                </Typography>
                                <Typography className='token'>
                                    Token-based
                                </Typography>
                            </Card >
                        </Grid>
                        <Grid item xs={12} md={5} xl={5}>
                            <Card className='info-card' elevation={0} >
                                <Box className='parent-stack'>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={icon}
                                            sx={{ width: 24, height: 24 }}
                                        />
                                        <Typography className='text-token'>
                                            0x896...7c3d
                                        </Typography>
                                    </Stack>
                                    <Typography className='detail-description'>
                                        1000000BTN (100%)<RiShareBoxLine className='share' />
                                    </Typography>
                                </Box>
                            </Card>
                            <Button variant='contained' className='see-btn' disableElevation>
                                See all <BiChevronRight style={{ fontSize: '22px', paddingLeft: '4px' }} />
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </BoxWrapper>

        </React.Fragment>
    )
}

export default Dashboard;