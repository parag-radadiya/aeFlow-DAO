import React, { useState } from 'react';
import { Box, Button, Card, Grid, Typography, styled } from '@mui/material';
import resource from './../assets/images/resource.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Status from '../components/Status';
import action from './../assets/images/action.png';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MobileStepper from '@mui/material/MobileStepper';
import { FcInfo } from 'react-icons/fc'




const BoxWrapper = styled(Box)({
    padding: '2rem 9rem',
    background: '#F5F7FA',
    '.vote-title': {
        fontSize: '38px',
        fontWeight: '700',
        color: '#323F4B',
    },
    '.sub-title': {
        color: '#52606D',
        fontWeight: 500,
        paddingTop: '12px'
    },
    '.token': {
        color: '#003BF5', fontWeight: 700,
        paddingLeft: '7px'
    },
    '.vote-description': {
        paddingTop: '13px',
        color: '#52606D',
        fontSize: '20px',
    },
    '.resources-card': {
        background: '#fff',
        borderRadius: '12px',
        padding: '15px'
    },
    '.status-card': {
        background: '#fff',
        borderRadius: '12px',
        padding: '20px', marginTop: '24px'
    },
    '.parent-image': {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px'
    },
    '.resource-title': {
        color: '#323F4B',
        fontSize: '24px',
        fontWeight: 700,
        textAlign: 'center'
    },
    '.status-title': {
        color: '#323F4B',
        fontSize: '24px',
        fontWeight: 700,
    },
    '.resource-des': {
        fontSize: '17px',
        color: '#444546',
        paddingTop: '25px'
    },
    '.praposal-btn': {
        borderRadius: '12px',
        background: '#fff',
        color: '#323F4B', marginTop: '15px',
        textTransform: 'none',
        fontSize: '16px', fontWeight: 500
    },
    '.praposal-btn:hover': {
        background: '#fff',
    },
    '.action-card': {
        background: '#fff',
        borderRadius: '12px',
        padding: '24px', marginTop: '24px'
    },
    '.action-description': {
        fontSize: '14px', color: '#979FA9'
    },
    '.tab-title': {
        textTransform: 'capitalize',
        border: '1px solid gray',
        margin: '5px',
        borderRadius: '12px',
        color: '#003AF0'
    },
    '.css-1be5mm1-MuiLinearProgress-root-MuiMobileStepper-progress': {
        borderRadius: '5px',
        backgroundColor: '#ebebeb',
        width: '100%',
        height: '12px'
    },
    '.css-5xe99f-MuiLinearProgress-bar1': {
        backgroundColor: '#f5274e',
    },
    '.parent-tabs': {
        borderBottom: 1, borderColor: 'divider',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    },
    '.parent-over': {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '25px'
    },
    '.over-btn': {
        background: '#C4D7FF',
        color: '#628CFE',
        textTransform: 'none', fontWeight: 700, fontSize: '16px',
        borderRadius: '12px'
    },
    '.praposal-title': {
        color: '#225C8A', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '7px'
    }

})

const VotingPage = () => {

    const [show, setShow] = useState(false);
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <BoxWrapper>
                <Typography className='vote-title'>
                    Remuneration of Founders
                </Typography>
                <Typography className='sub-title'>
                    Published by
                    <span className='token'>
                        0x4ca...4656
                    </span>
                </Typography>
                <Typography className='vote-description'>
                    It is necessary for founders to be rewarded for the creativity efforts and risks involved in the origination of this DAO. This proposal establishes that they will be rewarded.
                </Typography>

                <Grid container spacing={0} columnSpacing={3}>
                    <Grid item xs={12} md={7} xl={7}>
                        {
                            (show) &&
                            <Box>
                                <Typography className='resource-des'>
                                    The founders will be rewarded as an outcome of the value created by the functions of the system. Measuring rewards requires that the functions that are value adding are clearly defined in code and in future proposals, For each function a user might use that is value adding, a cost is ascribed. For each charge made by the system a portion shall be diverted to the Founders.
                                </Typography>
                                <Button variant='contained' onClick={() => setShow(false)
                                } className='praposal-btn' disableElevation >
                                    Close full proposal <KeyboardArrowUpIcon sx={{ marginLeft: '8px', fontSize: '20px' }} />
                                </Button>
                            </Box>
                        }
                        {
                            (!show) &&
                            <Button variant='contained' onClick={() => setShow(true)} className='praposal-btn' disableElevation >
                                Read full proposal <KeyboardArrowDownIcon sx={{ marginLeft: '8px', fontSize: '20px' }} />
                            </Button>
                        }

                        {/* for tabs components  */}

                        <Card elevation={0} className='action-card'>

                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box className='parent-tabs' sx={{

                                    }}>
                                        <Typography className='status-title'>
                                            Voting
                                        </Typography>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab className='tab-title' label="Breakdown" value="1" />
                                            <Tab className='tab-title' label="Voters" value="2" />
                                            <Tab className='tab-title' label="Info" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <Box>

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography sx={{ width: '70%', color: '#f5274e', fontWeight: 700 }}>
                                                    Yes
                                                </Typography>
                                                <Typography >
                                                    1M LER
                                                </Typography>
                                                <Typography sx={{ color: '#f5274e', fontWeight: 700 }}>
                                                    100%
                                                </Typography>
                                            </Box>
                                            <MobileStepper
                                                variant="progress"
                                                steps={1}
                                                position="static"
                                                activeStep={1}
                                            />
                                        </Box>

                                        <Box sx={{ paddingTop: '30px' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography sx={{ width: '70%', color: '#f5274e', fontWeight: 700 }}>
                                                    No
                                                </Typography>
                                                <Typography >
                                                    0M LER
                                                </Typography>
                                                <Typography sx={{ color: '#f5274e', fontWeight: 700 }}>
                                                    0%
                                                </Typography>
                                            </Box>
                                            <MobileStepper
                                                variant="progress"
                                                steps={0}
                                                position="static"
                                                activeStep={1}
                                            />
                                        </Box>
                                        <Box sx={{ paddingTop: '30px' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography sx={{ width: '70%', color: '#f5274e', fontWeight: 700 }}>
                                                    Abstain
                                                </Typography>
                                                <Typography >
                                                    0M LER
                                                </Typography>
                                                <Typography sx={{ color: '#f5274e', fontWeight: 700 }}>
                                                    0%
                                                </Typography>
                                            </Box>
                                            <MobileStepper
                                                variant="progress"
                                                steps={0}
                                                position="static"
                                                activeStep={1}
                                            />
                                        </Box>
                                        <Box className='parent-over'>
                                            <Button variant='contained' className='over-btn'>
                                                Vote Over
                                            </Button>
                                            <Typography className='praposal-title'>
                                                <FcInfo />   Proposal passed
                                            </Typography>
                                        </Box>


                                    </TabPanel>
                                    <TabPanel value="2">
                                        <Box className='parent-over'>
                                            <Button variant='contained' className='over-btn'>
                                                Vote Over
                                            </Button>
                                            <Typography className='praposal-title'>
                                                <FcInfo />   Proposal passed
                                            </Typography>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <Box className='parent-over'>
                                            <Button variant='contained' className='over-btn'>
                                                Vote Over
                                            </Button>
                                            <Typography className='praposal-title'>
                                                <FcInfo />   Proposal passed
                                            </Typography>
                                        </Box>
                                    </TabPanel>
                                </TabContext>

                            </Box>
                        </Card>
                        <Card elevation={0} className='action-card'>
                            <Typography className='status-title'>
                                Actions
                            </Typography>
                            <Typography className='action-description'>
                                These actions can be executed if the parameters you set for them are met.
                            </Typography>
                            <Box className='parent-image'>
                                <img src={action} alt='' />
                            </Box>
                            <Typography className='resource-title'>
                                No actions were added
                            </Typography>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={5} xl={5}>
                        <Card className='resources-card' elevation={0}>
                            <Box className='parent-image'>
                                <img src={resource} alt='' />
                            </Box>
                            <Typography className='resource-title'>
                                No resources were added
                            </Typography>
                        </Card>
                        <Card elevation={0} className='status-card'>
                            <Typography className='status-title'>
                                Status
                            </Typography>
                            <Status />
                            <Status />
                            <Status />

                        </Card>
                    </Grid>
                </Grid>

            </BoxWrapper>
        </React.Fragment>
    )
}

export default VotingPage