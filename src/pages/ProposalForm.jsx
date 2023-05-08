import React, { useState } from 'react';
import { Box, Button, Card, Typography, styled } from '@mui/material';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';


const BoxWrapper = styled(Box)({
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
        marginTop: '15px',
        padding: '13px 16px',
        background: '#fff'
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
        paddingTop: '2rem'
    },
    '.next-step': {
        textTransform: 'none', fontSize: '16px', borderRadius: '12px',
        background: '#3164FA'
    },
    '.error': {
        color: 'red',
        fontSize: '16px'
    },
    '.main-propasal-card': {
        width: '650px',
        padding: '25px 55px 21px 22px', marginTop: '20px', background: '#F5F7FA'
    },
    '.parent-proposal': {
        display: 'flex',
        justifyContent: 'center'
    },
    '.flow-select': {
        width: '106%',
        border: '2px solid #E4E7EB',
        // borderRadius: '12px',
        // padding: '1px 16px',
        background: '#fff'
    },

})

const ProposalForm = () => {

    const [characterCount, setCaracterCount] = useState(0);
    const navigate = useNavigate()

    const DisplayingErrorMessagesSchema = Yup.object().shape({
        title: Yup.string().required('proposal-title is Required'),
        description: Yup.string().required('Description is Required'),
        flow: Yup.string().required('flow is Required'),

    })

    return (
        <React.Fragment>
            <BoxWrapper>
                <div className='parent-proposal'>
                    <Card className='main-propasal-card' elevation={0} >
                        <Formik
                            initialValues={{
                                title: "",
                                description: "",
                                flow: ''
                            }}

                            validationSchema={DisplayingErrorMessagesSchema}
                            onSubmit={values => {
                                console.log(values);
                                navigate('/vote')
                            }}
                        >

                            {({ errors, touched, values, handleChange }) => (
                                <Form>
                                    <Box sx={{ p: 2 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: '45px', textAlign: 'center', pb: 5, fontWeight: 700 }}>
                                                Proposal Form
                                            </Typography>
                                            <Typography className='field-title'>
                                                Proposal Title
                                            </Typography>
                                            <Typography className='field-subTitle'>
                                                Maximum of 128 characters
                                            </Typography>
                                            <Field
                                                name="title"
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
                                            <ErrorMessage name="title">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
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
                                                Condition Flow
                                            </Typography>
                                            <FormControl fullWidth sx={{ marginTop: '15px' }}>
                                                <InputLabel id="demo-simple-select-label"> flow </InputLabel>
                                                <Select
                                                    className='flow-select'
                                                    name='flow'
                                                    value={values.flow}
                                                    label="Flow"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value="">
                                                        {/* <em>None</em> */}
                                                    </MenuItem>
                                                    <MenuItem value={10}> flow 1 </MenuItem>
                                                    <MenuItem value={20}> flow 2</MenuItem>
                                                    <MenuItem value={30}> flow 3 </MenuItem>
                                                </Select>
                                            </FormControl>
                                            <ErrorMessage name="flow">{msg => <div className='error'>{msg}</div>}</ErrorMessage>
                                        </Box>

                                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button variant='contained' type='submit' className='next-step'>Next <KeyboardArrowRight style={{ paddingLeft: '5px' }} /> </Button>
                                        </div>
                                    </Box>

                                </Form>
                            )}


                        </Formik>
                    </Card>
                </div>
            </BoxWrapper >
        </React.Fragment >
    )
}

export default ProposalForm;