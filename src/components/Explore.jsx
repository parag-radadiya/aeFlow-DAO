import React from 'react'
import { Avatar, Box, Card, Typography, styled, Stack } from '@mui/material';
import user from './../assets/images/1.jpg';
import { BsBoxFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';

const BoxWrapper = styled(Box)({
    margin: '20px 0px',
    '.explore-card': {
        padding: '24px', borderRadius: '12px',
        border: '2px solid #f5274e', height: '190px'
    },
    '.title': {
        fontSize: '25px', fontWeight: 700,
        color: '#323F4B'
    },
    '.parent-explore': {
        display: 'flex',
        alignItems: 'center',
        gap: '18px'
    },
    '.description-explore': {
        fontSize: '18px',
        padding: '12px 0px'
    },
    '.explore-stack': {
        padding: '10px 0px'
    },
    '.stack-title': {
        display: 'flex',
        alignItems: 'center'
    }
})

const Explore = ({ title, subTitle, description, btnTitle }) => {
    return (
        <BoxWrapper>
            <Card className='explore-card' elevation={0}>
                <Box className='parent-explore'>
                    <Box>
                        <Avatar alt="Travis Howard" sx={{ width: 55, height: 55 }} src={user} />
                    </Box>
                    <Box>
                        <Typography className='title'>
                            {title}
                        </Typography>
                        <Typography>
                            {subTitle}
                        </Typography>
                    </Box>
                </Box>
                <Box className='description-explore'>
                    {description}
                </Box>
                <Box>
                    <Stack className='explore-stack' direction="row" spacing={2}>
                        <Typography className='stack-title'> <BsBoxFill fontSize={'18px'} style={{ paddingRight: '10px', color: '#f5274e' }} /> Ethereum</Typography>
                        <Typography className='stack-title'> <HiUsers fontSize={'18px'} style={{ paddingRight: '10px', color: '#f5274e' }} /> Token-based </Typography>
                    </Stack>
                </Box>
            </Card>
        </BoxWrapper >
    )
}

export default Explore;