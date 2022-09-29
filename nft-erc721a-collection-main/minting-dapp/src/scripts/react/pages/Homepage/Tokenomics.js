// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";

// ----------------------------------------------------------------------

const Tokenomics = [
  { icon: "buy", description: "Buy slippage (tax) of 1%, going directly to the $NEON treasury." },
  { icon: "sell", description: "Sell slippage (tax) of 10%, going directly to the $NEON treasury." },
  { icon: "transfer", description: "Transfer between wallets taxes of 5%, going directly to the $NEON treasury." },
  { icon: "exchange", description: "Maximum sales of 1,000 $NEON per transaction." },
  { icon: "cooldown", description: "There is a 1 hr cooldown between sales and no cooldown for buy transactions." }
];

export default function Tokenomic() {
  return (
    <MContainer id="tokenomics" sx={{ position: "relative", pt: 18 }}>
      <Typography variant="h2" align="center">
        TOKENOMICS
      </Typography>
      <Typography align="center" sx={{ mt: 2, mb: 4 }}>
        The Council implemented measures prevent traders, investors and bots from harming the players. <br /> The following $NEON mechanisms ensure our players get a fair share of their profits:
      </Typography>
      <Stack direction="row" justifyContent="center" flewWrap="wrap">
        <Grid container columnSpacing="30px" rowSpacing="30px" justifyContent="center">
          {Tokenomics.map((item, index) => (
            <Grid item md={4} xs={12}>
              <Stack sx={{ background: "url(/images/token-card.png)", backgroundSize: "100% 100%", p: 3, pr: 5 }} alignItems="flex-start">
                <Stack justifyContent="center" sx={{ height: 48 }}>
                  <Box component="img" src={`/images/icons/${item.icon}.png`} />
                </Stack>
                <Typography sx={{ mt: 3 }}>{item.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </MContainer>
  );
}
