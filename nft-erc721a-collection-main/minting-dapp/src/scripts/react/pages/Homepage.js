// material
import { Stack, Box, Typography, Button, Grid, Hidden } from "@mui/material";
// import trendingUpFill from "@mui/icons-material/home"
// components
import MContainer from "components/MContainer";
import WaveIcon from "components/WaveIcon";
import ProductDisplay from "../components/ProductDisplay";
import RewardCoinSwap from "./Homepage/RewardCoinSwap";
import CoreTeam from "./Homepage/CoreTeam";
import DevTeam from "./Homepage/DevTeam";
import Roadmap from "./Homepage/Roadmap";
import LandOwnership from "./Homepage/LandOwnership";
import NeonSkiesMetaverse from "./Homepage/NeonSkiesMetaverse";
import MainGameElements from "./Homepage/MainGameElements";
import Client from 'shopify-buy';
import { useState, useEffect } from 'react';
import { styled, alpha } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";
import Store from '../Store';
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

const LinkStyle = styled(Typography)(({ theme }) => ({
  fontSize: '12px !important',
  cursor: 'pointer',
  fontWeight: 400,
  color: "#7C8998",
  marginRight: theme.spacing(5),
  textDecoration: "none",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    color: "#FFC107",
  },
  [theme.breakpoints.down("lg")]: {
    marginRight: theme.spacing(4)
  }
}));

const client = Client.buildClient({
    domain: 'the-miners-nft.myshopify.com',
    storefrontAccessToken: 'eb4d4f990b4d3e0daf3bec77f50c90bd'
  });

export default function Homepage() {
  
  return (
    <Box sx={{ position: "relative", width: 1 }}>
    
      
      <MContainer id="home" 
        sx={{ 
          position: "relative",
           pt: { lg:8, md: 6, sm: 5, xs: 5 },
           marginTop:'0rem',borderRadius:'59px',
           pb: { lg: 8, md: 6, sm: 5, xs: 5 },
           pl: { lg: 10, md:8, sm: 7, xs: 6 },
           filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
           backgroundColor:'#F4F6F5',
           backgroundImage:'url(/images/forest.webp)',
           backgroundSize:'contain',
           backgroundRepeat:'no-repeat',
           backgroundPosition:'right'
         }}
       >
        <Grid container>
          <Grid item lg={5} sm={6} xs={12}>
            <Typography variant="h1"  color="primary"><div style={{backgroundColor:'#fff',transform: 'rotate(-2deg)',position:'relative',left:'-20px',width:'520px'}}><div style={{backgroundColor:'transparent',transform: 'rotate(2deg)',position:'relative',left:'20px'}}>NATURAL,</div></div> HANDCRAFTED, <div style={{backgroundColor:'#EBD96B',transform: 'rotate(-2deg)',position:'relative',left:'-20px',width:'520px'}}><div style={{backgroundColor:'transparent',transform: 'rotate(2deg)',position:'relative',left:'20px'}}>MANLY</div></div> SOAP.</Typography>
            <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
              {/*<b>Quality</b>*/} <b>WARNING:</b> Not for clowns! 
            </Typography>
            {/*<Typography sx={{ mt: 2 }}>
              <b>Need a new hoodie? Craving all-natural soap?</b> Well, this is the right place! 
            </Typography>*/}
            <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
              <WaveIcon  style={{position:'relative',top:'25px'}}/>
              <LinkStyle
                component={ScrollLink}
                to={"products"}
                spy
                smooth
                sx={{
                  "&.active": {
                    color: "warning.main",
                  },
                  marginRight: '0px'
                }}
              >
              <Button variant="contained" color="primary"  sx={{ width: 221, height: 82, borderRadius: "10px", fontSize:'30px',lineHeight:'45px',letterSpacing:'-5%' }}>
                Shop Now
              </Button>
              </LinkStyle>

             {/* <Button
                variant="contained"
                href="https://discord.com/invite/Xv8ZEff4vW"
                target="_blank"
                sx={{ width: 198, height: 82, background: "#7289da", "&:hover": { background: "#7289da" }, borderRadius: "10px" ,fontSize:'30px',lineHeight:'45px',letterSpacing:'-5%'}}
              >
                Discord
              </Button>*/}
            </Stack>
          </Grid>
          <Grid item lg={5} sm={6} xs={12}>
            <Hidden smDown>
              <Box component="img" src="/images/headerImage.webp" sx={{ pointerEvents:'none',position: "absolute", right: { lg: 'calc(1vw - 116px)', md: -105, sm: -75, xs: 25 }, top: -50, width: 1, maxWidth: "1184px" }} />
            </Hidden>
          </Grid>
        </Grid>
      </MContainer>
      <Hidden smUp>
        <Box component="img" src="/images/neon_skies_mobile.png" sx={{ width: 1, mt: -15 }} />
      </Hidden>

      
      <Store client={client}/>
      <NeonSkiesMetaverse />
          {/* <LandOwnership /> */}
       
      {/*<MainGameElements />*/}
      {/*<RewardCoinSwap />*/}
      {/* <TokenDistribution /> */}
      {/* <Tokenomics /> */}
      {/* <IcoFundRaiser /> */}
      {/*<Roadmap />*/}
     {/* <CoreTeam />*/}
      <DevTeam />
    </Box>
  );
}
