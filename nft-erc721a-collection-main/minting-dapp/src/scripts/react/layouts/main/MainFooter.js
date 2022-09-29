import { Icon } from "@iconify/react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from "@mui/material";
//
import LogoGrey from "../../components/LogoGrey";
import discord from "@iconify/icons-cib/discord";
import twitter from "@iconify/icons-cib/twitter";
import telegram from "@iconify/icons-cib/telegram";
import medium from "@iconify/icons-cib/medium";
import linkedin from "@iconify/icons-cib/linkedin";
import instagram from "@iconify/icons-cib/instagram";
import youtube from "@iconify/icons-cib/youtube";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";

// ----------------------------------------------------------------------

const SOCIALS = [
  // { name: 'FaceBook', icon: facebookFill },
  // { name: 'Google', icon: googleFill },
  // { name: 'Linkedin', icon: linkedinFill },
  // { name: 'Twitter', icon: twitterFill }
];
const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: '#1c1c1c'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <Stack direction="row" alignItems="center" sx={{ position: "relative", height: 124, background: "linear-gradient(180deg, #1c1c1c 0%, #1b1b1c 100%)" }}>
      <MContainer maxWidth="lg">
        <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between" spacing={{ xs: 1, md: 0 }}>
          <Stack direction="row" alignItems="center" spacing={{ xs: 2, sm: 6 }}>
            <LogoGrey />
            <Stack>
              <Typography sx={{ fontSize: "14px !important", color:"#637381" }}>© Copyright 2022 Miners Supply Co., all rights reserved.</Typography>
              {/* <Typography sx={{ fontSize: "14px !important" }} color="primary">
                hello@neonskies.io
              </Typography> */}
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  px: "12px",
                  "&:hover": { color: "#EDD160" }
                }}
                target="_blank"
                href="https://twitter.com/theminersnft"
              >
                <Icon icon={twitter} width="16" height="16" />
              </IconButton>
              {/*<IconButton
                sx={{
                  transition: "all 0.2s",
                  px: "12px",
                  "&:hover": { color: "#DA1FA2" }
                }}
                target="_blank"
                href="https://www.youtube.com/channel/UCnRkXUrLo65-QSU5wvaBKhA"
              >
                <Icon icon={youtube} width="16" height="16" />
              </IconButton>*/}
              {/*<IconButton
                sx={{
                  transition: "all 0.2s",
                  px: "12px",
                  "&:hover": { color: "#DA1FA2" }
                }}
                target="_blank"
                href="https://neonskies.medium.com/"
              >
                <Icon icon={medium} width="16" height="16" />
              </IconButton>*/}
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  px: "12px",
                  "&:hover": { color: "#EDD160" }
                }}
                target="_blank"
                href="https://www.instagram.com/theminersnft/"
              >
                <Icon icon={instagram} width="16" height="16" />
              </IconButton>
             {/* <IconButton
                sx={{
                  transition: "all 0.2s",
                  px: "12px",
                  "&:hover": { color: "#DA1FA2" }
                }}
                target="_blank"
                href="https://t.me/+N8NrpWZDJUs5NjBh"
              >
                <Icon icon={telegram} width="16" height="16" />
              </IconButton>*/}

              {/* <IconButton
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { color: "#DA1FA2" }
                }}
                target="_blank"
                href="https://opensea.io/monkchains"
              >
                <SvgIconStyle src="/images/icons/telegram.svg" sx={{ width: 24, height: 24, color: "#7C8998", transition: "all 0.2s", "&:hover": { color: "#DA1FA2" } }} />
              </IconButton>
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { color: "#DA1FA2" }
                }}
                target="_blank"
                href="https://opensea.io/monkchains"
              >
                <SvgIconStyle src="/images/icons/instagram.svg" sx={{ width: 24, height: 24, color: "#7C8998", transition: "all 0.2s", "&:hover": { color: "#DA1FA2" } }} />
              </IconButton>
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { color: "#DA1FA2" }
                }}
                target="_blank"
                href="https://opensea.io/monkchains"
              >
                <SvgIconStyle src="/images/icons/facebook.svg" sx={{ width: 24, height: 24, color: "#7C8998", transition: "all 0.2s", "&:hover": { color: "#DA1FA2" } }} />
              </IconButton> */}
              <IconButton
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { color: "#EDD160" }
                }}
                target="_blank"
                href="https://discord.gg/theminersnft"
              >
                <SvgIconStyle src="/images/icons/discord.svg" sx={{ width: 24, height: 24, color: "#7C8998", transition: "all 0.2s", "&:hover": { color: "#EDD160" } }} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </MContainer>
    </Stack>
  );
}
