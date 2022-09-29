// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";
import WaveIcon from "components/WaveIcon";

// ----------------------------------------------------------------------
export default function NeonSkiesMetaverse() {
  return (
    <MContainer id="mission" sx={{ position: "relative", pt: 20 }}>
      <Hidden smDown>
        <Box
          component="img"
          src="/images/gary.webp"
          sx={{ position: { sm: "absolute", xs: "relative" }, width: { md: "900px", sm: 0.8, xs: 1 }, right: '100px', top: { md: 190, sm: 140, xs: 0 } }}
        />
      </Hidden>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Stack sx={{ position: "relative", py: 8 }}>
            <Typography component="span" variant="h2"  color="primary"  style={{position:'relative',zIndex:2}}>
              OUR STORY
            </Typography><WaveIcon style={{position:'relative', left:55, top:-25, zIndex:1,transform:'rotate(7deg)  scale(0.8)'}}/>
            <Typography sx={{ mt: 4 }}>
             A group of friends got together and decided to combine their talents to form a community driven business. 
        
            </Typography>
            
            <Typography sx={{ mt: 3 }}>Our promise is delivering the highest quality products at the best price. We produce as many products as we can in-house to make sure we can always supply them without worrying about higher costs or reduced quality overtime.</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Hidden smUp>
        <Box component="img" src="/images/gary.webp" sx={{ width: 1, mt: -10 }} />
      </Hidden>
    </MContainer>
  );
}
