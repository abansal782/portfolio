import * as React from 'react';
import {Grid, Box, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
import '../App.css';
//import garima from  "../Images/Garima.png";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Box className="App-header-banner">
    <Box className="container">
    <Grid container spacing={6}>
    <Grid item md={6}>
    <Typography variant="h2" gutterBottom>
       {[t("Hi, I'm John Watson")].join(" ")}
    </Typography>
    <Typography variant="body1" gutterBottom>
    {[t("Highly recognized in the community, I can meet the challenges that your company will entrust me. I am a recognized expert in the field of Software Development.")].join(" ")}
    </Typography>
    </Grid>
    <Grid item md={6}>
    {/* <img src={garima} className='App-logo' alt="logo" /> */}
    </Grid>
    </Grid>
    </Box>
    </Box>
  ); 
};

export default Header;