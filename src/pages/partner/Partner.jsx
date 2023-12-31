import React from 'react'
import {styled} from '@mui/system';
import {Box,Container} from '@mui/system';
import { Typography } from '@mui/material';
import logoImage from '../../assets/foodlogoo.png'
import starImage from '../../assets/Star.png'
import logosImage from '../../assets/logos.png'

const Partner = ()=> {
    const CustomContainer = styled(Container)(({theme})=>({
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
            marginBottom:theme.spacing(4),
        },
    })
    );
    const CustomBox =styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
            marginBottom:theme.spacing(4),
        },
    }));
  return (
    <Box sx={{mt:10}}>
<CustomContainer>
<CustomBox>

<Typography
variant="body2" sx={{
    color:"#7DB589",
    fontSize:"16px",
    fontWeight:"bold",
    mt:2,
}}>More than 45,000 trust Kerala mess
</Typography>
</CustomBox>

<Box>
<img src={starImage} alt='stars' style={{maxWidth:"100%"}}/> 
<Typography
variant='body2'
sx={{
    color:"#7D8589",
    fontSize:"16px",
    fontWeight:"bold",
    mt:2
}}
>

    5-Star Rating (2k+ Reviews)
</Typography>
</Box>
</CustomContainer>
<Container sx={{display:"flex",
flexDirection:"column"}}>
   <img
    src={logosImage} alt='logos' />

</Container>


    </Box>
  )
}

export default Partner