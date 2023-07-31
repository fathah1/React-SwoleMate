import React from 'react'
import {Box,Stack, Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner2.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'170px',xs:'70px'},ml:{sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">Swole Mate</Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg:'44px',xs:'40px'}}} mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography >
        <Typography fontSize="22px" mb={4}>
            Swole mates here at your service. 
        </Typography>
        <Button variant="contained" color="error" mb={3}
        sx={{backgroundColor:'#ff2625', padding:'10px'}}
        >Find the Exercise you want</Button>
        <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.1,display:{lg:'block',xs:'none'}}} fontSize="200px">
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="image" className="hero-banner-img" sx={{}} />
    </Box>
  )
}

export default HeroBanner