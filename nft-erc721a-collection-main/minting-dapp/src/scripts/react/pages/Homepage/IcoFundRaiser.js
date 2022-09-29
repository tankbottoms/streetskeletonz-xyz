// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, IconButton, Divider, Hidden, InputBase, LinearProgress, linearProgressClasses } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";
import CountDown from "components/CountDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: "8px",

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#2D335A",
    borderRadius: "8px"
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.primary,
    borderRadius: "8px"
  }
}));
// ----------------------------------------------------------------------
export default function Homepage() {
  return (
    <MContainer sx={{ position: "relative", mt: 15 }}>
      <Grid container alignItems="center">
        <Grid item lg={6} md={6}>
          <Typography variant="h2">
            <Typography component="span" variant="h2" color="primary">
              ICO{" "}
            </Typography>
            FUND RAISER
          </Typography>
          <Typography sx={{ mt: 1, mb: 4 }}>
            Text example something like we are open <br /> to fund donations and financial investments
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="secondary" href="" target="_blank" sx={{ width: 112, height: 40, borderRadius: "4px" }}>
              SoftCap
            </Button>
            <Button variant="" color="secondary" href="" target="_blank" sx={{ width: 112, height: 40, borderRadius: "4px" }}>
              HardCap
            </Button>
          </Stack>
          <Typography color="white" sx={{ fontSize: "12px !important", mt: 2, mb: 1.5, ml: 2 }}>
            Buy
          </Typography>

          <Stack direction="row" alignItems="center" sx={{ pl: 2, bgcolor: "#191D3D", height: 40, width: 350, borderTop: "1px solid #2E2F50", borderBottomRightRadius: "6px" }}>
            <Stack flex={1}>
              <InputBase placeholder="0.00" sx={{ width: 1, fontSize: "12px !important" }} />
            </Stack>

            <Divider sx={{ height: 28, m: 1.5, color: "#425061" }} orientation="vertical" />
            <Typography sx={{ fontSize: "12px !important", mr: 1 }}>USD</Typography>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Stack>
          <Button variant="contained" color="primary" href="" target="_blank" sx={{ width: 115, height: 40, borderRadius: "4px", mt: 5 }}>
            Purchase
          </Button>
        </Grid>

        <Grid item lg={6} md={6}>
          <Stack alignItems="center" sx={{ background: "url(/images/ico-card.png)", backgroundSize: "100% 100%", py: "92px" }}>
            <Stack sx={{ width: 306 }}>
              <CountDown />
              <Typography sx={{ mb: 4 }}>ICO fund gathering until February 24 2022</Typography>
              <BorderLinearProgress sx={{ width: 1 }} variant="determinate" value={60} />
              <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
                <Typography variant="h6">40 000 000</Typography>
                <Typography variant="h6">60 000 000</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </MContainer>
  );
}
