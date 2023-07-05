import React from 'react'
import {styled} from '@mui/system';
import {Box,Container} from '@mui/system';
import { Typography } from '@mui/material';
import buyIcon from '../../assets/buy_icon.png'
import sellIcon from '../../assets/sell_icon.png'
import rentIcon from '../../assets/sell_icon.png'

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import Custombutton from '../../components/Header/custombutton/Custombutton';

const Booking = () => {

    const guideTitles =[
        {
      image:buyIcon,
      title:"Order Guides",
      desc:"How to Order"

    },
    {
        image:sellIcon,
        title:"Booking Guides",
        desc:"How to Book"
  
      },
      {
        image:rentIcon,
        title:"Payment Guides",
        desc:"Payment methods"
  
      },

]

const CustomBox = styled(Box)(({theme})=>({
width:"40%",
[theme.breakpoints.down("md")]:{
    width:"85%",
},


}));

const GuidesBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
        width:"100%",
    },
    [theme.breakpoints.down("sm")]:{
       marginBottom:"0",
       flexDirection:"column",
    },
}));

const GuideBox =styled(Box)(({theme})=>(
    {
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        marginTop:theme.spacing(5),
        marginRight:theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            margin:theme.spacing(2,0,2,0),
        },
    }
))

  return (
   <Box
   sx={{display:"flex",
 flexDirection:"column",
 alignItems:"center",
 justifyContent:"center",
 padding:"40px",
}}
   >
    <div 
    style={{width:"5%",
    height:"5px",
    backgroundColor:"#000339",
    margin:"0 auto",}}> </div>

    <Typography
    variant='h3'
    sx={{fontSize:"35px",fontWeight:"bold",color:"#000339",my:3}}>
        How to Book
    </Typography>
<CustomBox>
<Typography variant='body2' sx={{
    fontSize:"16px",
    fontWeight:"500",
    color:"#5A6473",
    textAlign:"center"
}}>
    Everything you need to know when you book for advance slot
</Typography>
</CustomBox>
<GuidesBox>

{guideTitles.map((items,index)=>(


<GuideBox key={items.index}>
  <img src={items.image} alt='icons' />
    <Typography variant='body2'
    sx={{fontWeight:"500",
fontSize:"20px",
color:'#3B3c45',
my:1
}}
   
    > {items.title}</Typography>
    <Box sx={{
    cursor:"pointer",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    }}>
        <Typography variant='body2'
        sx={{fontWeight:"bold",fontSize:"14px",color:"#0689ff"}}>
            {items.desc}
        </Typography>
   <ArrowRightAltIcon style={{color:"#0689ff"}}/>
    </Box>


</GuideBox>
))}

</GuidesBox>
<Custombutton
backgroundColor="#0F1B4C"
color="#fff"
buttonText="See Full Guides"
guidebtn={true}



/>




   </Box>
  )
}

export default Booking