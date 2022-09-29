// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection(props) {
  const LinkStyle = this.props.LinkStyle;
  return (
   <MContainer id="home" sx={{ position: "relative", pt: { lg: 18, md: 16, sm: 12, xs: 3 } }}>
        <Grid container>
          <Grid item lg={5} sm={6} xs={12}>
            <Typography variant="h1"  color="primary">HONEST&nbsp;QUALITY</Typography>
            <Typography variant="h5" color="primary" sx={{ mt: 1, letterSpacing: "2px !important" }}>
              {/*<b>Quality</b>*/} Delivered to your door. 
            </Typography>
            {/*<Typography sx={{ mt: 2 }}>
              <b>Need a new hoodie? Craving all-natural soap?</b> Well, this is the right place! 
            </Typography>*/}
            <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
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
                <Button variant="contained" color="primary"  sx={{ width: 178, height: 40, borderRadius: "4px" }}>
                  Browse Products
                </Button>
              </LinkStyle>

              <Button
                variant="contained"
                href="https://discord.com/invite/Xv8ZEff4vW"
                target="_blank"
                sx={{ width: 128, height: 40, background: "#7289da", "&:hover": { background: "#7289da" }, borderRadius: "4px" }}
              >
                Join Discord
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </MContainer>
  );
}
