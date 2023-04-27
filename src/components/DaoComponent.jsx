import { Box, Button, Card, Typography, styled } from '@mui/material'
import React from 'react'
import dao from './../assets/images/createdao.png'
import { Link } from 'react-router-dom'

const BoxWrapper = styled(Box)({
    '.dao-title': {
        fontSize: '28px',
        fontWeight: 700,
    },
    '.description-dao': {
        fontSize: '16px', lineHeight: '25px',
        fontWeight: 600, padding: '10px'
    },
    '.view-btn': {
        background: '#f5274e',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500, color: '#fff',
        borderRadius: '12px',
        padding: '6px 15px', margin: '16px 0px'
    },
})

const DaoComponent = ({ title, description, isFlag }) => {
    return (
        <React.Fragment>
            <BoxWrapper>
                <Card variant="outlined" sx={{ p: 3, border: '1px solid #f5274e', background: '#fff4f4', borderRadius: '12px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '25%' }}>
                            <img src={dao} alt='create-dao-image' width={'60%'} />
                        </Box>
                        <Typography className='dao-title'>
                            {title}
                        </Typography>
                    </Box>
                    <Typography className='description-dao'>
                        {description}
                    </Typography>
                    {isFlag ?
                        <Typography sx={{ padding: '22px 10px', fontSize: '20px', fontWeight: 500, color: '#9AA5B1' }}>
                            Comming soon
                        </Typography> :
                        <Link to='/dashboard'>
                            <Button variant="contained" className='view-btn' disableElevation> View a DAO  </Button>
                        </Link>
                    }


                </Card>
            </BoxWrapper>
        </React.Fragment>
    )
}

export default DaoComponent