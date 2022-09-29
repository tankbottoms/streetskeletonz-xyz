// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";

// ----------------------------------------------------------------------
export default function LandOwnership() {
  return (
    <MContainer id="landownership" sx={{ position: "relative", pt: 20 }}>
      <Hidden smDown>
        <Box
          component="img"
          src="/images/land-ownership.png"
          sx={{ position: { sm: "absolute", xs: "relative" }, width: { md: "initial", sm: 0.8, xs: 1 }, right: 0, top: { md: 100, sm: 140, xs: 0 } }}
        />
      </Hidden>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Stack sx={{ position: "relative", py: 8 }}>
            <Typography variant="h2">
              <Typography component="span" variant="h2" color="primary">
                LAND{" "}
              </Typography>
              OWNERSHIP
            </Typography>
            <Typography sx={{ mt: 4 }}>
              Chemists work in Laboratories within the RAIN Game. Players initiate Rain Weather Events that deploy their Weather Drones into various layers of the earth’s atmosphere.
            </Typography>
            <Typography sx={{ mt: 3 }}>
              As a Chemistry Lab owner, you earn passive income by collecting laboratory usage fees everytime a player initiates a Rain Weather Event.
            </Typography>
            <Typography sx={{ mt: 3 }}>Check out our litepaper for more information about Chemistry Labs.</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Hidden smUp>
        <Box component="img" src="/images/land-ownership.png" sx={{ width: 1, mt: -10 }} />
      </Hidden>
    </MContainer>
  );
}
