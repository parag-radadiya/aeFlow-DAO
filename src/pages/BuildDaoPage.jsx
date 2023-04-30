import React, { useState } from 'react'
import { Box, styled, Card, Typography, Button, Grid } from '@mui/material'
import CreateDaoNavbar from '../components/CreateDaoNavbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StepDao from '../components/StepDao';
import step1 from './../assets/svgs/step1.png';
import step2 from './../assets/svgs/step2.png';
import step3 from './../assets/svgs/step3.png';
import step4 from './../assets/svgs/step4.png';
import Stepper from '../components/Stepper';



const BoxWrapper = styled(Box)({
    padding: '0px 8rem',
    background: '#F5F7FA',
    '.parent-start': {
        paddingTop: '7.2rem'
    },
    '.evolve-card': {
        border: '2px solid #f5274e',
        padding: '48px', borderRadius: '12px'
    },
    '.evolve-title': {
        color: '#323F4B',
        fontSize: '35px',
        fontWeight: 700
    },
    '.evolve-desc': {
        color: '#52606D',
        fontSize: '20px',
        fontWeight: 500
    },
    '.launch-btn': {
        background: '#f5274e',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '12px',
        padding: '10px 18px'
    }
})


const BuildDaoPage = () => {

    const [hide, setHide] = useState(true);

    return (
        <React.Fragment>
            <CreateDaoNavbar />
            {
                (hide) &&
                <BoxWrapper>
                    <Box className='parent-start'>
                        <Card className='evolve-card' variant='contained' elevation={0}>
                            <Typography className='evolve-title'>
                                Build your DAO
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px' }}>
                                <Typography className='evolve-desc'>
                                    Start simple and learn as you go. You can always evolve your DAO in the future.
                                </Typography>
                                <Button variant="contained" className='launch-btn' onClick={() =>
                                    setHide(false)
                                }>Build your DAO <KeyboardArrowRightIcon sx={{ paddingLeft: '5px' }} /></Button>
                            </Box>
                        </Card>
                    </Box>
                    <Box sx={{ paddingTop: '45px' }}>
                        <Grid container columnSpacing={2.8}>
                            <Grid item xs={12} md={3} xl={3}>
                                <StepDao step='Step 1' chainTitle='Select blockchain'
                                    stepImage={step1}
                                />
                            </Grid>
                            <Grid item xs={4} md={3} xl={3}>
                                <StepDao step='Step 2' chainTitle='Describe your DAO'
                                    stepImage={step2}
                                />
                            </Grid>
                            <Grid item xs={12} md={3} xl={3}>
                                <StepDao step='Step 3' chainTitle='Define membership'
                                    stepImage={step3}
                                />
                            </Grid>
                            <Grid item xs={4} md={3} xl={3}>
                                <StepDao step='Step 4' chainTitle='Select governance settings'
                                    stepImage={step4}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </BoxWrapper>
            }
            {
                !hide &&
                <Box sx={{ marginTop: '7.2rem', fontSize: '50px' }}>
                    <Stepper />
                </Box>
            }
        </React.Fragment>
    )
}

export default BuildDaoPage