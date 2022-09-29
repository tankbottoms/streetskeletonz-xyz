// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";

// ----------------------------------------------------------------------
export default function RewardCoinSwap() {
  return (
    <MContainer id="coinswaps" sx={{ position: "relative" }}>
      <Hidden smDown>
        <Box component="img" src="/images/rain.png" sx={{ position: { sm: "absolute", xs: "relative" }, width: { md: "initial", sm: 0.8, xs: 1 }, right: 0, top: { md: 40, sm: 100, xs: 0 } }} />
      </Hidden>
      <Grid container>
        <Grid item sm={6} sx={12}>
          <Stack sx={{ position: "relative", py: 16 }}>
            <Typography variant="h2">
              <Typography component="span" variant="h2" color="primary">
                $RAIN{" "}
              </Typography>
              REWARD <br /> COIN SWAPS
            </Typography>
            <Typography sx={{ mt: 4 }}>RAIN Game uses $RAIN —an in-game, non-token currency— as the reward. Players may trade their in-game $RAIN rewards for $USDC using the Neon Swap.</Typography>
            <Typography sx={{ mt: 3 }}>For each swap, a 5% swap offering goes directly to the reward pool to promote economic sustainabilty. For example:</Typography>
            <Typography sx={{ mt: 3 }}>
              Player swaps 100 $RAIN <br />
              5% swap fee (5 $USDC) is sent to the reward pool
              <br />
              Player receives 95 $USDC
            </Typography>
            {/* <Typography sx={{ mt: 1 }}>
              99 $NEON <Box component="img" src="/images/icons/arrow.png" sx={{ mx: 2 }} /> 990 $RAIN
            </Typography> */}
            <Typography variant="h5" sx={{ mt: 6 }}>
              SWAP LIMITS:
            </Typography>
            <Grid container>
              <Grid item md={6} xs={6}>
                <Typography variant="h6" color="#7C8998" sx={{ mt: 2 }}>
                  $USDC <Box component="img" src="/images/icons/arrow.png" sx={{ mr: 1 }} />
                  $RAIN
                </Typography>
                <Typography>5 max daily swaps</Typography>
                <Typography>$50,000 (max $250,000)</Typography>
              </Grid>

              <Grid item md={6} xs={6}>
                <Typography variant="h6" color="#7C8998" sx={{ mt: 2 }}>
                  $RAIN <Box component="img" src="/images/icons/arrow.png" sx={{ mr: 1 }} />
                  $USDC
                </Typography>
                <Typography>1 max daily swap</Typography>
                <Typography>$50,000</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Hidden smUp>
        <Box component="img" src="/images/rain.png" sx={{ width: 1, mt: -25 }} />
      </Hidden>
    </MContainer>
  );
}
