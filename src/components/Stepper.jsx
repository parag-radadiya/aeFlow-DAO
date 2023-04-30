import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Card, Typography, styled } from '@mui/material';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';


const BoxWrapper = styled(Box)({
    padding: '0px 8rem',
    '.progress-card': {
        border: '2px solid #f5274e',
        padding: '36px'
    },
    '.progress-title': {
        fontSize: '18px', fontWeight: 'bold',
        padding: '8px', color: '#f5274e'
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
    '.parent-progress': {
        display: 'flex',
        justifyContent: 'space-between', alignItems: 'center'
    },
    '.back-btn': {
        backgroundColor: '#f5274e',
        color: '#fff',
        borderRadius: '10px'
    }, '.next-btn': {
        backgroundColor: '#f5274e',
        color: '#fff',
        borderRadius: '10px', marginLeft: '15px'
    },
    '.next-btn:hover': {
        backgroundColor: '#f5274e',
    }, '.back-btn:hover': {
        backgroundColor: '#f5274e',
    },
    '.progressbar-main': {
        fontSize: '40px', fontWeight: 700, paddingTop: '15px'
    }, ".pregress-desc": {
        fontSize: '20px', fontWeight: 500, color: '#52606D'
    }
})


const Stepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const [step, setStep] = React.useState(1);

    console.log("activeStep:", activeStep)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        secondEmail: Yup.string().email('Invalid email').required('Required'),

    })

    return (
        <>
            <BoxWrapper>
                <Box sx={{ p: 2 }}>
                    <Card className='progress-card' variant="outlined">
                        <Box className='parent-progress'>
                            <Typography className='progress-title'>
                                Create your DAO
                            </Typography>
                            <Typography sx={{ color: 'grey' }}>
                                Step {activeStep} of 4
                            </Typography>
                        </Box>
                        <MobileStepper
                            variant="progress"
                            steps={5}
                            position="static"
                            activeStep={activeStep}
                        />

                        <Typography className='progressbar-main'>
                            Describe your DAO
                        </Typography>
                        <Typography className='pregress-desc'>
                            Name and define your DAO so new contributors know they've come to the right place. This information is displayed on the DAO Explore page and can be changed with a vote. For ideas on DAO branding,
                        </Typography>

                    </Card>
                    {/* <Box sx={{ padding: '20px' }}>
                        <Button size='small' variant='contained' className='back-btn' onClick={() => handleBack()} disabled={activeStep === 0}>
                            <KeyboardArrowLeft /> Back
                        </Button >
                        <Button size='small' variant='contained' className='next-btn' onClick={() => handleNext()} disabled={activeStep === 4}>
                            next <KeyboardArrowRight />
                        </Button >
                    </Box> */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card elevation={0} sx={{ border: '2px solid #f5274e', width: '500px', padding: '20px', marginTop: '20px' }}>
                            <Formik
                                initialValues={{
                                    username: '',
                                    email: '', secondEmail: ''
                                }}

                                validationSchema={DisplayingErrorMessagesSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched, values }) => (
                                    <Form>
                                        <Box sx={{ p: 2 }}>
                                            {
                                                (step == 1) &&
                                                <Box>
                                                    <div>
                                                        <label> User Name : </label>
                                                    </div >
                                                    <Field
                                                        style={{ width: '100%' }}
                                                        name="username"
                                                        value={values.username}
                                                    />
                                                    {touched.username && errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
                                                    <div style={{ paddingTop: '15px' }}>
                                                        <label> Email : </label>
                                                    </div >
                                                    <Field
                                                        style={{ width: '100%' }}
                                                        value={values.email}
                                                        name="email" />
                                                    {touched.email && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                                                    <div style={{ marginTop: '10px' }}>
                                                        <button onClick={() => {
                                                            if (values.email && values.username) {
                                                                setStep(2)
                                                                handleNext();
                                                            }
                                                        }
                                                        } > Next </button>
                                                    </div>
                                                </Box>
                                            }
                                            {
                                                (step == 2) &&
                                                <Box>
                                                    <div style={{ paddingTop: '15px' }}>
                                                        <label> step2 Email : </label>
                                                    </div >
                                                    <Field style={{ width: '100%' }} name="secondEmail" />
                                                    {touched.secondEmail && errors.secondEmail && <div style={{ color: 'red' }}>{errors.secondEmail}</div>}
                                                    <div style={{ marginTop: '10px' }}>
                                                        <button onClick={() => {
                                                            setStep(1)
                                                            handleBack()
                                                        }
                                                        }> back </button>
                                                        <button type="submit">Submit</button>
                                                    </div>
                                                </Box>

                                            }


                                            {/* {
                                                (step == 1) && <div style={{ marginTop: '10px' }}>
                                                    <button onClick={() => {
                                                        // if (values.email && values.username) {
                                                        setStep(2)
                                                        handleNext()
                                                        // }

                                                    }}  > Next </button>
                                                </div>
                                            }
                                            {step == 2 &&
                                                <div style={{ marginTop: '10px' }}>
                                                    <button onClick={() => {
                                                        setStep(1)
                                                        handleBack()
                                                    }
                                                    }> back </button>
                                                    <button type="submit">Submit</button>
                                                </div>
                                            } */}

                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Card>
                    </div>

                </Box>
            </BoxWrapper >
        </>

    );
}

export default Stepper;