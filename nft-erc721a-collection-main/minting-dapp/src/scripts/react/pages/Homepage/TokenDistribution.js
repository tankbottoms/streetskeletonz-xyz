// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";

// ----------------------------------------------------------------------

const Distributions = [
  {
    title: "$NEON\n Treasury",
    amount: "2,790,000",
    description: "Transactions returned to this pool include game asset mints/purchases, buy/sell/transfer taxes, and swap fees. 10% of Marketplace Sales."
  },
  { title: "Development", amount: "335,000", description: "25% unlocked monthly." },
  {
    title: "Marketing",
    amount: "50,000",
    description: "Reserved for marketing campaigns and growing the community. If used, tokens will be provided for marketers to use in-game and cannot be sold."
  },
  { title: "Airdrops", amount: "25,000", description: "Reserved for giveaways and holders." },
  { title: "Token\n liquidity pool", amount: "600,000", description: "$NEON/$USDT Liquidity Pair locked for 12 months." },
  { title: "Presale", amount: "400,000", description: "$0.60 per token." },
  { title: "IDO", amount: "800,000", description: "$0.80 per token." }
];

export default function Homepage() {
  return (
    <MContainer id="distribution" sx={{ position: "relative", pt: 8 }}>
      <Typography variant="h2" align="center">
        <Typography component="span" variant="h2" color="primary">
          $NEON{" "}
        </Typography>
        TOKEN DISTRIBUTION
      </Typography>
      <Grid container sx={{ mt: 6 }} columnSpacing={10}>
        <Grid item sm={6} xs={12}>
          <Stack sx={{ height: 1 }}>
            <Box flex={1} sx={{ width: 1, position: "relative" }}>
              <Box component="img" src="/images/token-distribution.png" sx={{ position: { md: "absolute", xs: "relative" }, width: { md: "initial", xs: 1 }, left: { md: -160, xs: 0 } }} />
            </Box>
            <Grid container sx={{ position: "relative" }}>
              <Grid item md={6} sm={12} xs={6}>
                <Typography variant="body2">
                  <Typography component="span" variant="h6" color="#DA1FA2">
                    • 55%{" "}
                  </Typography>
                  Reward pool
                </Typography>
                <Typography variant="body2">
                  <Typography component="span" variant="h6" color="#39D6E2">
                    • 16%{" "}
                  </Typography>
                  Initial Dex offering
                </Typography>
                <Typography variant="body2">
                  <Typography component="span" variant="h6" color="#336CFF">
                    • 12%{" "}
                  </Typography>
                  Liquidity pool
                </Typography>
                <Typography variant="body2">
                  <Typography component="span" variant="h6" color="#2390F4">
                    • 8%{" "}
                  </Typography>
                  Presale
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={6}>
                <Typography variant="body2">
                  <Typography component="span" variant="h6" color="#8427EE">
                    • 6,7%{" "}
                  </Typography>
                  Development
                </Typography>
                <Typography variant="body2">
                  <Typography component="span" variant="h6" color="#C216D7">
                    • 1,0%{" "}
                  </Typography>
                  Marketing
                </Typography>
                <Typography variant="body2">
                  <Typography component="span" variant="h6" color="#3716FF">
                    • 0,5%{" "}
                  </Typography>
                  Airdrops
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ position: "relative" }}>
          <Hidden mdDown>
            <>
              <Stack direction="row" sx={{ pb: 1, borderBottom: "2px solid #17223A" }}>
                <Typography flex={1} sx={{ fontSize: "12px !important" }}>
                  Distribution
                </Typography>
                <Typography flex={1} sx={{ fontSize: "12px !important" }}>
                  Allocations
                </Typography>
                <Typography flex={2} sx={{ fontSize: "12px !important" }}>
                  Description
                </Typography>
              </Stack>
              {Distributions.map((item, index) => (
                <Stack direction="row" alignItems="center" sx={{ mt: 3 }}>
                  <Typography flex={1} color="#fff" sx={{ fontSize: "14px !important", whiteSpace: "pre-line" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="h6" flex={1} sx={{ color: "white" }}>
                    {item.amount}
                  </Typography>
                  <Typography flex={2} sx={{ fontSize: "12px !important" }}>
                    {item.description}
                  </Typography>
                </Stack>
              ))}
            </>
          </Hidden>
          <Hidden mdUp>
            <>
              <Stack direction="row" sx={{ pb: 1, borderBottom: "2px solid #17223A", mt: 5 }}>
                <Typography flex={1} sx={{ fontSize: "12px !important" }}>
                  Distribution, allocations
                </Typography>
                <Typography flex={1} sx={{ fontSize: "12px !important" }}>
                  Description
                </Typography>
              </Stack>
              {Distributions.map((item, index) => (
                <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
                  <Typography flex={1} color="#fff" sx={{ fontSize: "14px !important" }}>
                    {item.title}
                    <br />
                    {item.amount}
                  </Typography>
                  <Typography flex={1} sx={{ fontSize: "12px !important" }}>
                    {item.description}
                  </Typography>
                </Stack>
              ))}
            </>
          </Hidden>
        </Grid>
      </Grid>
    </MContainer>
  );
}
