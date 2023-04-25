import React, { useState } from 'react'
import { Box, Card, Grid, Stack, Typography, styled, Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { TbFlag3Filled } from 'react-icons/tb'
import { BsBoxFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import user from './../assets/images/user.png'
import { AiOutlineStar } from 'react-icons/ai'



const BoxWrapper = styled(Box)({
    padding: '0px 8rem',
    '.nation-title': {
        fontSize: '40px',
        color: '#323F4B',
        fontWeight: 700
    },
    '.nation-card': {
        border: '2px solid #f5274e',
        borderRadius: '12px'
    },
    '.link': {
        color: '#7E8894',
        fontSize: '18px',
        fontWeight: 600,
        padding: '10px 0px'
    }, '.sub-link': {
        color: '#f5274e',
        fontWeight: 600,
    },
    '.description': {
        fontSize: '18px',
        fontWeight: 500,
        color: '#54626F',
        padding: '10px 0px',
    },
    '.user-img': {
        width: '120px',
        height: '120px',
        borderRadius: '50%'
    },
    '.user-grid': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '.stack-title': {
        fontSize: '14px', display: 'flex', alignItems: 'center'
    },
    '.like-tile': {
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
    },
    '.like-btn': {
        background: '#F7F4FA',
        padding: '10px'
    }
})

const Dao = () => {

    const [readmore, setReadMore] = useState(true);

    const handleClick = () => {
        setReadMore(!readmore)
    }

    const description = 'We are a nation of people who are aware that even the tiniest thing can make a major impact on the world we live. We collaborate, share resources, and invest in projects that make positive long lasting generational impacts on our families and the world in which we live.'


    return (
        <>
            <BoxWrapper>
                <Card variant="outlined" className='nation-card' sx={{ padding: '48px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={10} xl={10} >
                            <Typography className='nation-title'>
                                Burnt Toast Nation
                            </Typography>
                            <Typography className='link'>
                                burnttoastnation.dao.eth
                            </Typography>
                            <Typography className='sub-link'>
                                https://app.aragon.org/#/daos/ethereum/0x2b28ef53b20ca76bd27d8fbd3e95d0bdb35bc8ab
                            </Typography>
                            <Typography className='description' sx={{ wordWrap: 'break-word' }}>
                                {readmore ? description.split('').slice(0, 150) : description}
                                <span onClick={handleClick} style={{ color: '#f5274e', fontWeight: '600' }}> {readmore ? `...Read more` : `..less more`}</span> {readmore ? <ArrowDownwardIcon sx={{ fontSize: '15px', color: '#f5274e' }} /> : <ArrowUpwardIcon sx={{ color: '#f5274e', fontSize: '15px' }} />}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={2} xl={2} className='user-grid'>
                            <img src={user} alt='sample logo' className='user-img' />
                        </Grid>
                    </Grid>

                    <Box sx={{ paddingTop: '25px', display: 'flex', justifyContent: 'space-between' }}>
                        <Stack sx={{ display: 'flex', alignItems: 'center' }} direction="row" spacing={2}>
                            <Typography className='stack-title'><TbFlag3Filled fontSize={'18px'} style={{ paddingRight: '10px', color: '#f5274e' }} /> April 2023 </Typography>
                            <Typography className='stack-title'> <BsBoxFill fontSize={'18px'} style={{ paddingRight: '10px', color: '#f5274e' }} /> Ethereum</Typography>
                            <Typography className='stack-title'> <HiUsers fontSize={'18px'} style={{ paddingRight: '10px', color: '#f5274e' }} /> Token-based </Typography>
                        </Stack>
                        <Box className='like-tile'>
                            <Typography sx={{ color: '#f5274e', fontWeight: '700' }}>
                                Pickleball Japan
                            </Typography>
                            <Button variant='contained' className='like-btn' disableElevation>
                                <AiOutlineStar color='grey' fontSize={'20px'} />
                            </Button>

                        </Box>
                    </Box>

                </Card>

            </BoxWrapper>
        </>
    )
}

export default Dao