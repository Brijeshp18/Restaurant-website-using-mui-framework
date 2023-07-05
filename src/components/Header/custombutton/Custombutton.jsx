import {styled} from '@mui/system';
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import React from 'react'

const Custombutton = ({
    backgroundColor,
    color,
    buttonText,
    welcomeBtn,
    guidebtn,
    getStartedbtn

}) => {

    const CustomButton =styled(Button)(({theme})=>(
        {
            backgroundColor:  backgroundColor,
            color:color,
            fontWeight:"700",
            cursor:"pointer",
            padding:"0.5rem 1.25rem",
            borderRadius:"7px",
            textTransform:"none",
            display:"block",
            border:"2px solid transparent",
            "&:hover":{
                backgroundColor: color ,
                color:backgroundColor,
                borderColor:backgroundColor,
            },
            [theme.breakpoints.down("md")]:{
                margin:(welcomeBtn ||getStartedbtn)&& theme.spacing(0,"auto",3,"auto"),
                width:(welcomeBtn||getStartedbtn)&& "90%",
            },
            [theme.breakpoints.down("sm")]:{
                marginTop:guidebtn && theme.spacing(3),
                width:guidebtn && "90%",
            },

        }))
    
        return (
            <CustomButton>{buttonText}</CustomButton>
        );
  
};

export default Custombutton
