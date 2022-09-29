// material
import { useState, useEffect } from "react";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden, TextField } from "@mui/material";
// components
import Page from "../components/Page";
import axios from "utils/axios";
import { useSnackbar } from "notistack";
import { useWeb3React } from "@web3-react/core";
// ----------------------------------------------------------------------

export default function Homepage() {
  const { enqueueSnackbar } = useSnackbar();
  const { account } = useWeb3React();
  const [firstAddress, setFirstAddress] = useState("");

  const handleFirstWhitelist = async () => {
    try {
      const res = await axios.post("/api/monkchain/firstWhitelist", { address: firstAddress });
      enqueueSnackbar("Whitelist success!", {
        variant: "success"
      });
    } catch (error) {
      enqueueSnackbar(error.error, {
        variant: "error"
      });
    }
  };

  const handleMint = async () => {
    try {
      const res = await axios.post("/api/monkchain/firstMint", { address: account });
      console.log("result", res.data);
      const root = res.data.root;
      const proof = res.data.proof;
      console.log("root", root, "proof", proof);
      enqueueSnackbar("Whitelist success!", {
        variant: "success"
      });
    } catch (error) {
      enqueueSnackbar(error.error, {
        variant: "error"
      });
    }
  };
  return (
    <Page>
      <Container maxWidth="lg">
        <Stack>
          <Typography>First Private Sale Whitelist</Typography>
          <Stack direction="row" alignItems="center" spacing={3}>
            <TextField variant="outlined" value={firstAddress} onChange={(e) => setFirstAddress(e.target.value)} InputProps={{ sx: { height: 38, width: 600 } }} />
            <Button variant="contained" onClick={handleFirstWhitelist}>
              Whitelist
            </Button>
          </Stack>
        </Stack>

        <Stack>
          <Button variant="contained" onClick={handleMint}>
            Mint
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
