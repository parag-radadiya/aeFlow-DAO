import React from 'react'
import { styled, Box, Card, Typography, Button } from '@mui/material';
import creater from './../assets/images/creater1.png'
import { useNavigate } from 'react-router-dom';

const BoxWrapper = styled(Box)({
    '.parent-img': {
        display: 'flex',
        justifyContent: 'center'
    },
    '.creater-card': {
        padding: '48px',
        border: '2px solid #f5274e',
        borderRadius: '12px'
    },
    '.title-create': {
        fontSize: '25px',
        fontWeight: 700,
        textAlign: 'center'
    },
    '.desc-creater': {
        fontSize: '16px',
        lineHeight: '22px',
        fontWeight: 500, color: '#747F8D',
        textAlign: 'center'
    },
    '.creater-btn': {
        background: '#f5274e',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '12px',
        padding: '6px 15px'
    },
    '.creater-btn:hover': {
        background: '#f5274e',
    },
});


const Creater = ({ title, description, btnTitle, image }) => {

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <BoxWrapper>
                <Card variant="outlined" className='creater-card'>
                    <Box className='parent-img'>
                        <img src={image} alt='creater' width='50%' />
                    </Box>
                    <Box>
                        <Typography className='title-create'>
                            {title}
                        </Typography>
                        <Typography className='desc-creater'>
                            {description} <span style={{ color: '#f5274e' }}>proposal guide.</span>
                        </Typography>
                        <Box sx={{ textAlign: 'center', paddingTop: '25px' }}>
                            <Button variant="contained" className='creater-btn'
                                disableElevation
                                onClick={() => navigate('/proposal')}
                            >{btnTitle} </Button>
                        </Box>
                    </Box>
                </Card>

            </BoxWrapper>
        </React.Fragment>
    )
}

export default Creater