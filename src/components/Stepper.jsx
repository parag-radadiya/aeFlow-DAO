import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Card, Typography, styled } from '@mui/material';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';


const BoxWrapper = styled(Box)({
    padding: '0px 8rem',
    background: '#F5F7FA',
    '.progress-card': {
        border: '2px solid #f5274e',
        borderRadius: '12px',
        padding: '36px', marginTop: '16px'
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
    },

    '.form-textarea': {
        width: '100%',
        border: '2px solid #E4E7EB',
        borderRadius: '12px',
        padding: '13px 16px',
        background: '#fff', marginTop: '18px'
    },
    '.form-textarea::placeholder': {
        fontSize: '16px',
        color: '#A6ACB7'
    },
    '.form-field': {
        width: '100%',
        border: '2px solid #E4E7EB',
        borderRadius: '12px',
        padding: '13px 16px',
        background: '#fff'
    },
    '.form-field::placeholder': {
        fontSize: '16px',
        color: '#A6ACB7'
    },
    '.field-title': {
        fontSize: '18px',
        fontWeight: 700,
        color: '#4D5863'
    },
    '.field-subTitle': {
        fontSize: '14px',
        color: '#67747F',
        paddingTop: '3px'
    },
    '.caracter-count': {
        color: '#67747F',
        fontSize: '14px',
        paddingTop: '12px'
    },
    '.main-field': {
        paddingTop: '2.5rem'
    },
    '.next-step': {
        textTransform: 'none', fontSize: '16px', borderRadius: '12px',
        background: '#3164FA'
    },
    '.error': {
        color: 'red',
        fontSize: '16px'
    }

})


const Stepper = () => {
    const [activeStep, setActiveStep] = React.useState(1);
    //  for count the carecter --> 
    const [characterCount, setCaracterCount] = React.useState(0);
    // for stepper state ---->
    const [step, setStep] = React.useState(1);

    console.log("activeStep:", activeStep)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        daoname: Yup.string()
            .required('Dao-Name is Required'),
        subdomain: Yup.string().required('Sub-Domain Required'),
        description: Yup.string().required(' Description is Required'),
        name: Yup.string().required(' Name is Required'),
        symbol: Yup.string().required(' Symbol is Required'),

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
                        {
                            (step == 1) &&
                            <Box>
                                <Typography className='progressbar-main'>
                                    Describe your DAO
                                </Typography>
                                <Typography className='pregress-desc'>
                                    Name and define your DAO so new contributors know they've come to the right place. This information is displayed on the DAO Explore page and can be changed with a vote. For ideas on DAO branding,
                                </Typography>
                            </Box>
                        }
                        {
                            (step == 2) &&
                            <Box>
                                <Typography className='progressbar-main'>
                                    Define membership
                                </Typography>
                                <Typography className='pregress-desc'>
                                    Decide the type of voting your DAO uses. You can change these settings with a vote. For help deciding which type of governance is best for you
                                </Typography>
                            </Box>
                        }


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
                        <Card elevation={0} sx={{ width: '650px', border: '1px dotted green', padding: '20px', marginTop: '20px', background: '#F5F7FA' }}>
                            <Formik
                                initialValues={{
                                    daoname: "",
                                    subdomain: "",
                                    description: "", secondEmail: '', name: '', symbol: ''
                                }}

                                validationSchema={DisplayingErrorMessagesSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched, values, handleChange }) => (
                                    <Form>
                                        <Box sx={{ p: 2 }}>
                                            {
                                                (step == 1) &&
                                                <Box>
                                                    <Box>
                                                        <Typography className='field-title'>
                                                            DAO name
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            Maximum of 128 characters
                                                        </Typography>
                                                        {console.log("handleChange", handleChange)}
                                                        <Field
                                                            name="daoname"
                                                            className='form-field'
                                                            value={values.daoname}
                                                            onChange={handleChange}
                                                            placeholder='Type your DAOs name...'
                                                        />
                                                        <Typography className='caracter-count'>
                                                            {characterCount}/128
                                                        </Typography>
                                                        <ErrorMessage name="daoname">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                                                    </Box>
                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            ENS Subdomain
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            This will be your DAO’s unique ENS subdomain, created automatically for you. Lowercase letters, numbers, and the dash '-' are all acceptable characters; ideally, the character count should be under 128.
                                                        </Typography>
                                                        {console.log("handleChange", handleChange)}
                                                        <Field
                                                            name="subdomain"
                                                            className='form-field'
                                                            value={values.subdomain}
                                                            onChange={handleChange}
                                                            placeholder='aragon'
                                                        />
                                                        <Typography className='caracter-count'>
                                                            {characterCount}/128
                                                        </Typography>
                                                        <ErrorMessage name="subdomain">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                                                    </Box>
                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            LOGO
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            JPG, PNG, GIF, or SVG of no more than 3MB. We recommend 1024x1024px.
                                                        </Typography>
                                                    </Box>
                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            Description
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            Describe your DAO's purpose in a few sentences. This is listed on the Explore page so new contributors can find you.
                                                        </Typography>
                                                        <Field as='textarea'
                                                            rows={7}
                                                            name="description"
                                                            className='form-textarea'
                                                            value={values.description}
                                                            onChange={handleChange}
                                                            placeholder='Type your summary...'
                                                        />
                                                        <ErrorMessage name="description">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                                                    </Box>
                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            Links
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            Links to your DAO's website, social media profiles, Discord, or other places your community gathers.
                                                        </Typography>
                                                    </Box>
                                                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                                                        <Button variant='contained' className='next-step' onClick={() => {
                                                            if (values.daoname && values.subdomain && values.description) {
                                                                setStep(2)
                                                                handleNext()
                                                            }
                                                        }}>Next <KeyboardArrowRight style={{ paddingLeft: '5px' }} /> </Button>
                                                    </div>
                                                </Box>
                                            }
                                            {
                                                (step == 2) &&
                                                <Box>
                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            Mint your token
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            Define the token details and distribute tokens to a core team and DAO treasury. For more on token minting best practices,
                                                        </Typography>
                                                    </Box>

                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            Name
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            The full name of the token. Example: Uniswap
                                                        </Typography>
                                                        <Field
                                                            name="name"
                                                            className='form-field'
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            placeholder='Name...'
                                                        />
                                                        <ErrorMessage name="name">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                                                    </Box>

                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            Symbol
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            The abbreviation of the token. Example: UNI
                                                        </Typography>
                                                        <Field
                                                            name="symbol"
                                                            className='form-field'
                                                            value={values.symbol}
                                                            onChange={handleChange}
                                                            placeholder='Symbol...'
                                                        />
                                                        <ErrorMessage name="symbol">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                                                    </Box>



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