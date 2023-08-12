import React, { useState } from 'react'
import {styled} from '@mui/system';
import { Box,Typography } from '@mui/material'
import Custombutton from './custombutton/Custombutton';
import logoImage from '../../assets/foodlogoo.png'

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from "@mui/material"

import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate =useNavigate()
    const navbarTitles =[
        {
            path:'/',display:'Home',
        },
        {
            path:'/Dishes',display:'Dishes',
        },
        {
            path:'/Services',display:'Services',
        },
        {
            path:'/about',display:'About Us',
        }
    ]
    const [mobileMenu,setMobileMenu]=useState({left:false})
    const toogleDrawer=(anchor,open)=>(event)=>{
  if(event.type ==="keydown"&& (event.type === "tab"|| event.type ==="shift")){
    return;
  }setMobileMenu({...mobileMenu,[anchor]:open})
    }

    const list =(anchor)=>(

 <Box
 sx={{width:anchor==="top" || anchor ==="bottom" ?"auto" :250}}
  role="presentation"
  onClick={toogleDrawer(anchor,false)} 
  onKeyDown={toogleDrawer(anchor,false)}
 >
  <List>
    {navbarTitles.map((item,index)=>(

<ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
<ListItemButton>
  <ListItemIcon>
   {
    index === 0 && <HomeIcon/>
   }
      {
    index === 1 && <FeaturedPlayListIcon/>
   }
      {
    index === 2 && <MiscellaneousServicesIcon/>
   }
      {
    index === 3 && <ContactsIcon/>
   }

  </ListItemIcon>
  <ListItemText primary={item.display} />
</ListItemButton>
</ListItem>


    ))}
        
       
        
      </List>


 </Box>



    )

    const NavBarLinkBox=styled(Box)(({theme})=>(
        {
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:theme.spacing(3),
            [theme.breakpoints.down("md")]:{display:"none"},
        }
    ))
    const NarBarLink =styled(Typography)(()=>(
      {
        fontSize:'14px',
        color:'#4f5361',
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{color:'#fff'}

      }


    ));
    const NavBarLogo =styled("img")(({theme})=>(
        {   width:"29px",
            cursor:"pointer",
            [theme.breakpoints.down("md")]:{
                display:"none",
            },
        }
    ));
    const CustomMenuIcon = styled(MenuIcon)(({theme})=>(
        {
            display:"none",
            cursor:"pointer",
            marginRight:theme.spacing(2),
        [theme.breakpoints.down("md")]:{
            display:"block",
           
        },
        }
    ));
   
  return (
    
<Box 
sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    padding:"40px",
    maxWidth:"auto",
    backgroundColor:"#FED801",
    marginLeft:"0px",
    marginBottom:"-24px"
}}
>
<Box sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"2.5rem"
}}>
    
 <Box sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
 }}>
    <CustomMenuIcon onClick={toogleDrawer("left",true)}/>
    <Drawer
    anchor='left'
    open={mobileMenu["left"]}
    onClose={toogleDrawer("left",false)}
    >
    {list("left")}
        
    </Drawer>

< NavBarLogo src={logoImage} alt="logo" />
 </Box>
    <NavBarLinkBox>
    {
        navbarTitles.map((item,index)=>(<NarBarLink onClick={()=>navigate(item.path)} variant='body2'>{item.display}</NarBarLink>))
    }

    </NavBarLinkBox>
   



</Box>
<Box
 sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"1rem"
}}>
<NarBarLink variant='body2'>Sign Up</NarBarLink>
<Custombutton 
backgroundColor="#0f1B4C"
color="#fff"
buttonText="Register"


/>


</Box>

 
</Box>






    
  )
}

export default Header 