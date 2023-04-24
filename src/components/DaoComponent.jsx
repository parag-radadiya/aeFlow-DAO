import { Box, Button, Card, Typography, styled } from '@mui/material'
import React from 'react'
import dao from './../assets/images/createdao.png'

const BoxWrapper = styled(Box)({
    '.dao-title': {
        fontSize: '28px',
        fontWeight: 700,
    },
    '.description': {
        fontSize: '16px', lineHeight: '25px',
        fontWeight: 600, padding: '10px'
    },
    '.view-btn': {
        background: '#f5274e',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '12px',
        padding: '6px 15px', margin: '16px 0px'
    },
})

const DaoComponent = () => {
    return (
        <React.Fragment>
            <BoxWrapper>
                <Card variant="outlined" sx={{ p: 2, border: '1px solid #f5274e', background: '#fff4f4', borderRadius: '12px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '30%' }}>
                            <img src={dao} alt='create-dao-image' width={'60%'} />
                        </Box>
                        <Typography className='dao-title'>
                            Create your DAO
                        </Typography>
                    </Box>
                    <Typography className='description'>
                        A DAO is a decentralized autonomous organization, a type of bottom-up entity structure with no central authority. Members of a DAO own tokens of the DAO, and members can vote.
                    </Typography>
                    <Button variant="contained" className='view-btn' disableElevation> View a DAO </Button>
                </Card>
            </BoxWrapper>
        </React.Fragment>
    )
}

export default DaoComponent