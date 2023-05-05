import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Card, Typography, styled, Grid } from '@mui/material';
import * as Yup from 'yup';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';



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
    '.address-field': {
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
    '.back-step': {
        textTransform: 'none', fontSize: '16px', borderRadius: '12px',
        background: '#3164FA'
    },
    '.error': {
        color: 'red',
        fontSize: '16px'
    },
    '.mint-title': {
        fontSize: '24px', fontWeight: 700, color: '#4D5863'
    },
    '.mint-description': {
        fontSize: '18px', fontWeight: 500, color: '#67747F',
    },
    '.eligible-radio': {
        position: 'absolute', top: '10px', right: '12px'
    },
    '.vote-radio': {
        position: 'absolute', top: '15px', right: '12px', width: '20px'
    },
    '.parent-token-holder': {
        border: '2px solid #0075FF', borderRadius: '12px', padding: '12px 16px', marginTop: '10px', position: 'relative'
    },
    '.allocation-btn': {
        background: '#E4E7EB',
        color: '#566470', border: '1px solid #566470',
        borderRadius: '12px',
        padding: '10px 15px'
    },
    '.time': {
        fontSize: '14px'
    },
    '.parent-duration': {
        border: '1px solid #f5274e', display: 'flex', gap: '10px', marginTop: '10px',
        padding: '24px', background: '#fff', borderRadius: '12px'
    }
})


const StepperForm = () => {


    const [activeStep, setActiveStep] = React.useState(1);
    const [supportStep, setSupportstep] = React.useState(1);

    //  for count the carecter --> 
    const [characterCount, setCaracterCount] = React.useState(0);
    const [subdomain, setSubdomain] = React.useState(0);
    // for stepper state ---->
    const [step, setStep] = React.useState(1);
    const [file, setFile] = React.useState(0);

    const navigate = useNavigate();

    // count the minimum token 
    const [countToken, setCountToken] = React.useState(0);

    const handle = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const supportNext = () => {
        setSupportstep((prevActiveStep) => prevActiveStep + 1);
    };

    const supportBack = () => {
        setSupportstep((prevActiveStep) => prevActiveStep - 1);
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
                                Step {activeStep} of 3
                            </Typography>
                        </Box>
                        <MobileStepper
                            variant="progress"
                            steps={4}
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
                        {
                            (step == 3) &&
                            <Box>
                                <Typography className='progressbar-main'>
                                    Select governance settings
                                </Typography>
                                <Typography className='pregress-desc'>
                                    These settings determine how voting works in your DAO. Read best practices for governance settings in this guide.
                                </Typography>
                            </Box>
                        }

                    </Card>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card elevation={0} sx={{
                            width: '650px',
                            padding: '20px', marginTop: '20px', background: '#F5F7FA'
                        }}>
                            <Formik
                                initialValues={{
                                    daoname: "",
                                    subdomain: "",
                                    description: "",
                                    secondEmail: '', name: '', symbol: '', picked: '', execution: '', vote: '',
                                    detail: [
                                        {
                                            name: "",
                                            link: ""
                                        }
                                    ],
                                    distribute: [
                                        {
                                            address: '',
                                        }
                                    ]
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
                                                            onChange={(e) => {
                                                                handleChange(e)
                                                                setCaracterCount(e.target.value.length)
                                                            }}
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
                                                            onChange={(e) => {
                                                                handleChange(e)
                                                                setSubdomain(e.target.value.length)
                                                            }}
                                                            placeholder='aragon'
                                                        />
                                                        <Typography className='caracter-count'>
                                                            {subdomain}/128
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
                                                        <Box>
                                                            {
                                                                file ?
                                                                    <img src={file ? file : 'https://thumbs.dreamstime.com/z/live-streaming-handwritten-white-background-178485360.jpg'} alt='test-image' width={'64px'} style={{ marginTop: '16px' }} /> :
                                                                    <label htmlFor='upload1'>
                                                                        <Box sx={{ border: '2px dotted grey', width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                                                                            <AddIcon />
                                                                        </Box>

                                                                        <input type='file' alt='image-upload' id='upload1' onChange={handle} hidden />
                                                                    </label>
                                                            }

                                                        </Box>
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

                                                        <div>
                                                            <div >
                                                                <FieldArray name="detail">
                                                                    {({ insert, remove, push }) => (
                                                                        <div>
                                                                            <Box className='main-field' sx={{ background: '#fff', marginTop: '18px', padding: '16px 13px', borderRadius: '10px' }}>
                                                                                <div>
                                                                                    <Box sx={{ display: 'flex', gap: '130px' }}>
                                                                                        <div className='field-title'>Name/Description</div>
                                                                                        <div className='field-title'>Link</div>
                                                                                    </Box>


                                                                                    {values.detail.length > 0 &&
                                                                                        values?.detail?.map((detail, index) => (
                                                                                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5%' }}>
                                                                                                <div >
                                                                                                    <Field
                                                                                                        className='form-field'
                                                                                                        name={`detail.${index}.name`}
                                                                                                        placeholder="Lens,Discord,etc."
                                                                                                        type="text"
                                                                                                        value={values.detail[index]?.name}
                                                                                                        onChange={handleChange}
                                                                                                    />
                                                                                                </div>
                                                                                                <div >
                                                                                                    <Field
                                                                                                        className='form-field'
                                                                                                        name={`detail.${index}.link`}
                                                                                                        placeholder="https://"
                                                                                                        type="text"
                                                                                                        value={values.detail[index]?.link}
                                                                                                        onChange={handleChange}
                                                                                                    />
                                                                                                </div>
                                                                                                <div style={{ display: 'flex', alignItems: 'end', marginBottom: '1%' }}>
                                                                                                    <div
                                                                                                        onClick={() => remove(index)}
                                                                                                    >
                                                                                                        <DeleteForeverIcon sx={{ color: '#f5274e' }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                </div>
                                                                            </Box>
                                                                            <div  >
                                                                                <Button
                                                                                    onClick={() => {
                                                                                        push({ value: '', Workstreams: '' });

                                                                                    }}
                                                                                >
                                                                                    Add Link
                                                                                </Button>
                                                                            </div>

                                                                        </div>
                                                                    )}
                                                                </FieldArray>
                                                            </div>
                                                        </div>




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
                                                        <Typography className='mint-title'>
                                                            Mint your token
                                                        </Typography>
                                                        <Typography className='mint-description'>
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
                                                    {/* ---------------------  */}

                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            Distribute tokens
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            Add the wallets you'd like to distribute tokens to. If you need help distributing tokens, .
                                                        </Typography>
                                                    </Box>

                                                    <div>
                                                        <FieldArray name="distribute">
                                                            {({ insert, remove, push }) => (
                                                                <div>
                                                                    <Box className='main-field' sx={{ background: '#fff', marginTop: '18px', padding: '16px 13px', borderRadius: '10px' }}>
                                                                        <div>
                                                                            <Box sx={{ display: 'flex', gap: '160px' }}>
                                                                                <div className='field-title'>Address</div>
                                                                                <div className='field-title'>Tokens</div>
                                                                                <div className='field-title'>Allocation</div>
                                                                            </Box>


                                                                            {values.distribute.length > 0 &&
                                                                                values?.distribute?.map((distribute, index) => (
                                                                                    <div key={index} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                                                        <div >
                                                                                            <Field
                                                                                                className='address-field'
                                                                                                name={`distribute.${index}.address`}
                                                                                                placeholder="Token"
                                                                                                type="text"
                                                                                                value={values.distribute[index]?.address}
                                                                                                onChange={handleChange}
                                                                                            />
                                                                                        </div>
                                                                                        <Box sx={{ border: '2px solid #E4E7EB', width: '30%', marginTop: '22px', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                                            <button variant='contained' onClick={() => setCountToken(countToken + 1)}
                                                                                                style={{ border: 'none', background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 12px' }}>
                                                                                                +
                                                                                            </button>
                                                                                            <Typography>
                                                                                                {countToken}
                                                                                            </Typography>
                                                                                            <button variant='contained' onClick={() => setCountToken(countToken - 1)}
                                                                                                style={{ background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 13px', border: 'none' }}>
                                                                                                -
                                                                                            </button>
                                                                                        </Box>
                                                                                        <Box>
                                                                                            <Button variant='contained' className='allocation-btn' >
                                                                                                100%
                                                                                            </Button>
                                                                                        </Box>

                                                                                        <div style={{ display: 'flex', alignItems: 'end', marginBottom: '1%' }}>
                                                                                            <div
                                                                                                onClick={() => remove(index)}
                                                                                            >
                                                                                                <DeleteForeverIcon sx={{ color: '#f5274e' }} />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                        </div>
                                                                    </Box>
                                                                    <div  >
                                                                        <Button
                                                                            onClick={() => {
                                                                                push({ value: '', Workstreams: '' });

                                                                            }}
                                                                        >
                                                                            Add Wallet
                                                                        </Button>
                                                                    </div>

                                                                </div>
                                                            )}
                                                        </FieldArray>
                                                    </div>

                                                    <Box className='main-field'>
                                                        <Typography className='field-title'>
                                                            Proposal creation
                                                        </Typography>
                                                        <Typography className='field-subTitle'>
                                                            Specify who is permitted to create proposals and what the minimum token requirement is.
                                                        </Typography>
                                                        <Box sx={{ borderRadius: '12px', p: 2, background: '#fff', mt: 2 }}>
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={12} md={6} xl={6}>
                                                                    <Box className='field-title'>
                                                                        Who is eligible?
                                                                        <Box className='parent-token-holder'>
                                                                            <Typography className='field-title'>
                                                                                Token holders
                                                                            </Typography>
                                                                            <Typography className='field-subTitle'>
                                                                                Only token holders with a certain number of tokens are eligible to create proposals.
                                                                            </Typography>

                                                                            <Field className='eligible-radio' type="radio" name="picked" value="One" />
                                                                        </Box>
                                                                        <Box className='parent-token-holder'>
                                                                            <Typography className='field-title'>
                                                                                Any wallet
                                                                            </Typography>
                                                                            <Typography className='field-subTitle'>
                                                                                Any wallet can create proposals.
                                                                            </Typography>

                                                                            <Field className='eligible-radio' type="radio" name="picked" value="two" />
                                                                        </Box>

                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={12} md={6} xl={6}>
                                                                    <Box className='field-title'>
                                                                        Minimum tokens Required
                                                                        <Box sx={{ border: '2px solid #E4E7EB', marginTop: '10px', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                            <button variant='contained' onClick={() => setCountToken(countToken + 1)}
                                                                                style={{ border: 'none', background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 12px' }}>
                                                                                +
                                                                            </button>
                                                                            <Typography>
                                                                                {countToken}
                                                                            </Typography>
                                                                            <button variant='contained' onClick={() => setCountToken(countToken - 1)}
                                                                                style={{ background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 13px', border: 'none' }}>
                                                                                -
                                                                            </button>

                                                                        </Box>
                                                                    </Box>                                                            </Grid>
                                                            </Grid>
                                                        </Box>

                                                    </Box>

                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                                        <Button className='back-step' variant='contained' onClick={() => {
                                                            setStep(1)
                                                            handleBack()
                                                        }
                                                        }> back </Button>
                                                        <Button className='next-step' variant='contained' onClick={() => {
                                                            handleNext()
                                                            setStep(3)
                                                        }}>next</Button>
                                                    </Box>
                                                </Box>

                                            }
                                            {
                                                (step == 3) && (
                                                    <Box >
                                                        <Box className='main-field'>
                                                            <Typography className='field-title'>
                                                                Support threshold
                                                            </Typography>
                                                            <Typography className='field-subTitle'>
                                                                Support threshold is the percentage of tokens or that are required to vote “Yes” for a proposal to be approved, calculated based on total tokens that voted.
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ border: '1px solid red', borderRadius: '12px', background: '#fff', p: 3, mt: 1 }}>
                                                            <Box sx={{ border: '2px solid #E4E7EB', width: '100%', marginTop: '5px', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                <button variant='contained' onClick={supportNext}
                                                                    style={{ border: 'none', background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 12px' }}>
                                                                    +
                                                                </button>
                                                                <Typography>
                                                                    {supportStep}%
                                                                </Typography>
                                                                <button variant='contained' onClick={supportBack}
                                                                    style={{ background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 13px', border: 'none' }}>
                                                                    -
                                                                </button>
                                                            </Box>
                                                            <MobileStepper
                                                                variant="progress"
                                                                steps={100}
                                                                position="static"
                                                                activeStep={supportStep}
                                                            />
                                                        </Box>
                                                        <Box className='main-field'>
                                                            <Typography className='field-title'>
                                                                Minimum participation
                                                            </Typography>
                                                            <Typography className='field-subTitle'>
                                                                Minimum participation is the percentage of the token supply that must vote on a proposal for the vote to be valid. Make sure you set this at a low level that your DAO can meet, so you don't lock your voting process.
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ border: '1px solid red', borderRadius: '12px', background: '#fff', p: 3, mt: 1 }}>
                                                            <Box sx={{ border: '2px solid #E4E7EB', width: '100%', marginTop: '5px', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                <button variant='contained' onClick={supportNext}
                                                                    style={{ border: 'none', background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 12px' }}>
                                                                    +
                                                                </button>
                                                                <Typography>
                                                                    {supportStep}%
                                                                </Typography>
                                                                <button variant='contained' onClick={supportBack}
                                                                    style={{ background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 13px', border: 'none' }}>
                                                                    -
                                                                </button>
                                                            </Box>
                                                            <Typography sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: '14px', marginTop: '5px' }}>1 / 1 tokens</Typography>
                                                            <MobileStepper
                                                                variant="progress"
                                                                steps={100}
                                                                position="static"
                                                                activeStep={supportStep}
                                                            />
                                                        </Box>


                                                        <Box className='main-field'>
                                                            <Typography className='field-title'>
                                                                Minimum duration
                                                            </Typography>
                                                            <Typography className='field-subTitle'>
                                                                Minimum duration is the shortest length of time a proposal can be open for voting. You can extend the duration for each proposal but not shorten it.
                                                            </Typography>
                                                        </Box>
                                                        <Box className='parent-duration' >
                                                            <Box sx={{ width: '100%' }}>
                                                                <Typography className='time'>
                                                                    Minutes
                                                                </Typography>
                                                                <Box sx={{ border: '2px solid #E4E7EB', marginTop: '5px', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <button variant='contained' onClick={() => setCountToken(countToken + 1)}
                                                                        style={{ border: 'none', background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 12px' }}>
                                                                        +
                                                                    </button>
                                                                    <Typography>
                                                                        {countToken}
                                                                    </Typography>
                                                                    <button variant='contained' onClick={() => setCountToken(countToken - 1)}
                                                                        style={{ background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 13px', border: 'none' }}>
                                                                        -
                                                                    </button>
                                                                </Box>

                                                            </Box>
                                                            <Box sx={{ width: '100%' }}>
                                                                <Typography className='time'>
                                                                    Hours
                                                                </Typography>
                                                                <Box sx={{ border: '2px solid #E4E7EB', marginTop: '5px', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <button variant='contained' onClick={() => setCountToken(countToken + 1)}
                                                                        style={{ border: 'none', background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 12px' }}>
                                                                        +
                                                                    </button>
                                                                    <Typography>
                                                                        {countToken}
                                                                    </Typography>
                                                                    <button variant='contained' onClick={() => setCountToken(countToken - 1)}
                                                                        style={{ background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 13px', border: 'none' }}>
                                                                        -
                                                                    </button>
                                                                </Box>

                                                            </Box>
                                                            <Box sx={{ width: '100%' }}>
                                                                <Typography className='time'>
                                                                    Days
                                                                </Typography>
                                                                <Box sx={{ border: '2px solid #E4E7EB', marginTop: '5px', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                    <button variant='contained' onClick={() => setCountToken(countToken + 1)}
                                                                        style={{ border: 'none', background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 12px' }}>
                                                                        +
                                                                    </button>
                                                                    <Typography>
                                                                        {countToken}
                                                                    </Typography>
                                                                    <button variant='contained' onClick={() => setCountToken(countToken - 1)}
                                                                        style={{ background: '#F5F7FA', color: '#4D5863', borderRadius: '12px', fontSize: '20px', padding: '5px 13px', border: 'none' }}>
                                                                        -
                                                                    </button>
                                                                </Box>

                                                            </Box>

                                                        </Box>
                                                        <Box className='main-field'>
                                                            <Typography className='field-title'>
                                                                Early execution
                                                            </Typography>
                                                            <Typography className='field-subTitle'>
                                                                Allow proposal execution before the vote ends if the requirements are met and the vote outcome cannot be changed by more voters participating.
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: '15px' }}>
                                                            <Box className='parent-token-holder' sx={{ width: '100%' }}>
                                                                <Typography className='field-title'>
                                                                    No
                                                                </Typography>
                                                                <Field className='vote-radio' type="radio" name="execution" value="execution1" />
                                                            </Box>
                                                            <Box className='parent-token-holder' sx={{ width: '100%' }}>
                                                                <Typography className='field-title'>
                                                                    Yes
                                                                </Typography>
                                                                <Field className='vote-radio' type="radio" name="execution" value="execution2" />
                                                            </Box>
                                                        </Box>

                                                        <Box className='main-field'>
                                                            <Typography className='field-title'>
                                                                Vote change
                                                            </Typography>
                                                            <Typography className='field-subTitle'>
                                                                This setting allows voters to change their vote during the voting period. If you enabled early execution, this setting is automatically turned off.
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: '15px' }}>
                                                            <Box className='parent-token-holder' sx={{ width: '100%' }}>
                                                                <Typography className='field-title'>
                                                                    No
                                                                </Typography>
                                                                <Field className='vote-radio' type="radio" name="vote" value="vote1" />
                                                            </Box>
                                                            <Box className='parent-token-holder' sx={{ width: '100%' }}>
                                                                <Typography className='field-title'>
                                                                    Yes
                                                                </Typography>
                                                                <Field className='vote-radio' type="radio" name="vote" value="vote2" />
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', marginTop: '25px', justifyContent: 'space-between' }}>
                                                            <Button className='back-step' variant='contained' onClick={() => {
                                                                setStep(2)
                                                                handleBack()
                                                            }
                                                            }> back </Button>
                                                            <Button className='back-step' variant='contained'
                                                                onClick={() => navigate('/dashboard')}
                                                            > next </Button>
                                                        </Box>

                                                    </Box>
                                                )
                                            }
                                        </Box>
                                    </Form>
                                )}


                            </Formik>
                        </Card>
                    </div>
                </Box >
            </BoxWrapper >

        </>
    )
}

export default StepperForm