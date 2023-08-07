import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    
   <Box mt="80px" bgcolor="#fff3f4" width="100%">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
      <Typography variant="h6" mb="30px"> Made by Muhammed Fathah 💜</Typography>
      </Stack>
   </Box>
  )
}

export default Footer