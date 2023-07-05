import React from "react";
import { Box, Typography, Container, styled } from "@mui/material";
import deliveryImg from "../../assets/DeliveryImg.png"
import Custombutton from "../../components/Header/custombutton/Custombutton";

const Delivery= ()=> {
    const CustomContainer = styled(Container)(({ theme }) => ({

        backgroundColor:"#FED801",
        height:"416px",
        borderRadius:"15px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",

        [theme.breakpoints.down("md")]: {
          height:"auto",
          flexDirection:"column",
          alignItems:"center",
          padding:theme.spacing(3,3,0,3),
          width:"90%",
          textAlign:"center",
          
        },
      }));


      const CustomBox = styled(Box)(({ theme }) => ({
        padding:theme.spacing(10,0,10,0),
        margin:theme.spacing(0,2,0,2),
    
        [theme.breakpoints.down("md")]: {
          padding:"0",  
      
         
        },
      }));
    





  return (
    <CustomBox>
<CustomContainer>
<Box>
<Typography sx={{
    fontSize:"35px", color:"white",fontWeight:"700",fontFamily:"monospace"
}}>
Super Fast Delivery

</Typography>
<Typography 
sx={{
    fontSize:"16px", color:"#000",fontWeight:"800",my:3,fontFamily:"monospace"
}}>
    Door to Door Delivery
</Typography>

<Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}> <Custombutton 
backgroundColor="#fff"
color="#17275F"
buttonText="Order Now!!"


/>  </Box>

</Box>

<img src={deliveryImg } alt="delivery" style={{maxWidth:"100%"}}/>



</CustomContainer>




    </CustomBox>
  )
}

export default Delivery