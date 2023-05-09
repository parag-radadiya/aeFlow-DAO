import React, { useState } from 'react';
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import resource from './../assets/images/resource.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Status from '../components/Status';
import action from './../assets/images/action.png';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';
import MobileStepper from '@mui/material/MobileStepper';
import { FcInfo } from 'react-icons/fc';
import VotingTable from '../components/VotingTable';



const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledTab = styled(Tab)`
    font-family: IBM Plex Sans, sans-serif;
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: #fff;
      color:#f5274e;
    }
  
    &:focus {
      color: #fff;
      outline: 3px solid #;
    }
  
    &.${tabClasses.selected} {
      background-color: #fff;
      color:#f5274e;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const StyledTabPanel = styled(TabPanel)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 25px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    border-radius: 12px;
    `,
);

const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: #f5274e ;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
);




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
        display: 'flex', justifyContent: 'space-between'
    },
    '.parent-over': {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '25px'
    },
    '.over-btn': {
        background: '#ffa2a2',
        color: '#575757',
        textTransform: 'none', fontWeight: 700, fontSize: '16px',
        borderRadius: '12px'
    },
    '.praposal-title': {
        color: '#225C8A', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '7px'
    },
    '.main-title': {
        fontSize: '20px',
        fontWeight: 700,
        paddingTop: '10px'
    },
    '.decision-title': {
        fontSize: '16px', fontWeight: 500, color: '#63707B',
        padding: '5px 0px'
    },
    '.decision-details': {
        fontSize: '16px', fontWeight: 700, color: '#323f4B',
        padding: '5px 0px'
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


                            <Box>
                                <Tabs defaultValue={0}>
                                    <Box className='parent-tabs'>
                                        <Typography className='status-title'>
                                            Voting
                                        </Typography>
                                        <StyledTabsList>
                                            <StyledTab value={0}>Breakdown</StyledTab>
                                            <StyledTab value={1}>Voters</StyledTab>
                                            <StyledTab value={2}>Info</StyledTab>
                                        </StyledTabsList>
                                    </Box>
                                    <StyledTabPanel value={0}>
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
                                        <Box sx={{ paddingTop: '35px' }}>
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

                                        <Box sx={{ paddingTop: '35px' }}>
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

                                    </StyledTabPanel>
                                    <StyledTabPanel value={1}>

                                        {/* test components */}
                                        <TextField placeholder='Wallet,ENS, or  email'
                                            fullWidth id="fullWidth" />
                                        <Box sx={{ paddingTop: '20px' }}>
                                            <VotingTable />
                                        </Box>

                                        <Box className='parent-over'>
                                            <Button variant='contained' className='over-btn'>
                                                Vote Over
                                            </Button>
                                            <Typography className='praposal-title'>
                                                <FcInfo />   Proposal passed
                                            </Typography>
                                        </Box>

                                    </StyledTabPanel>
                                    <StyledTabPanel value={2}>
                                        <Typography className='main-title'>
                                            Rules of decision
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E4E7EB', paddingBottom: '15px' }}>
                                            <Box>
                                                <Typography className='decision-title'>
                                                    Options
                                                </Typography>
                                                <Typography className='decision-title'>
                                                    Strategy
                                                </Typography>
                                                <Typography className='decision-title'>
                                                    Support threshold
                                                </Typography>
                                                <Typography className='decision-title'>
                                                    Minimum participation (Quorum)
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography className='decision-details'>
                                                    Yes, no, or abstain
                                                </Typography>
                                                <Typography className='decision-details'>
                                                    1 token → 1 vote
                                                </Typography>
                                                <Typography className='decision-details'>
                                            > 65%
                                                </Typography>
                                                <Typography className='decision-details'>
                                                    ≥ 0 of 1M LER (0%)
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Typography className='main-title'>
                                            Voting activity
                                        </Typography>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E4E7EB', padding: '15px 0px' }}>
                                            <Box>
                                                <Typography className='decision-title'>
                                                    Current participation
                                                </Typography>
                                                <Typography className='decision-title'>
                                                    Unique voters
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography className='decision-details'>
                                                    1M of 1M LER (100%)
                                                </Typography>
                                                <Typography className='decision-details'>
                                                    1
                                                </Typography>
                                            </Box>
                                        </Box>





                                        <Typography className='main-title'>
                                            Duration
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E4E7EB', padding: '15px 0px' }}>
                                            <Box>
                                                <Typography className='decision-title'>
                                                    Start
                                                </Typography>
                                                <Typography className='decision-title'>
                                                    End
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography className='decision-details'>
                                                    2023/05/01 10:51 PM UTC+5:30
                                                </Typography>
                                                <Typography className='decision-details'>
                                                    2023/05/02 11:01 PM UTC+5:30
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className='parent-over'>
                                            <Button variant='contained' className='over-btn'>
                                                Vote Over
                                            </Button>
                                            <Typography className='praposal-title'>
                                                <FcInfo />   Proposal passed
                                            </Typography>
                                        </Box>
                                    </StyledTabPanel>
                                </Tabs>
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