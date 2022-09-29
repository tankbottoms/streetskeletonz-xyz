// material
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Hidden } from "@mui/material";
// hooks
import useCountdown from "hooks/useCountdown";

// ----------------------------------------------------------------------

// const RootStyle = styled(Page)(({ theme }) => ({
//   minHeight: "100%",
//   display: "flex",
//   alignItems: "center",
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(10),
// }));

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5)
  }
}));

const NumberStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

// ----------------------------------------------------------------------

export default function TokenCountDown() {
  const countdown = useCountdown(new Date(2022, 2, 24, 23));

  return (
    <Container>
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Stack direction="row" justifyContent="center">
          <NumberStyle>
            <Typography variant="h2">{countdown.days}:</Typography>
          </NumberStyle>
          <NumberStyle>
            <Typography variant="h2">{countdown.hours}:</Typography>
          </NumberStyle>

          <NumberStyle>
            <Typography variant="h2">{countdown.minutes}:</Typography>
          </NumberStyle>

          <NumberStyle>
            <Typography variant="h2">{countdown.seconds}</Typography>
          </NumberStyle>
        </Stack>
      </Box>
    </Container>
  );
}
