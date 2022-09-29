import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container, Hidden, Stack } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import LogoFull from "../../components/LogoFull";
import Label from "../../components/Label";

import ConnectWalletButton from "components/DappComponents/ConnectWalletButton";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import MContainer from "components/MContainer";
import './NavLogo.css'
import CartIcon from 'components/CartIcon';
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 52;
const APP_BAR_DESKTOP = 110;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP
  }
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(35);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <AppBar sx={{ boxShadow: 0, bgcolor: "transparent", backgroundImage: "none" }} >
        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              bgcolor: "background.default",
              height: APP_BAR_DESKTOP 
            })
          }}
        >
          <MContainer >
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
              <Box component={RouterLink} to="/" sx={{ mr: { lg: 14, md: 6 } }}>
               {/* <Logo />*/}
                 <LogoFull />
              </Box>

              <Hidden mdDown >
                <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
              </Hidden>

              <Box sx={{ flexGrow: 1 }} />
              <Hidden mdDown>
                <Button variant="contained" color="primary" href="" target="_blank" sx={{ width: 134, height: 62, borderRadius: "7px", justifyContent:'space-evenly', fontSize:'24px', fontFamily:'Poppins,sans-serif'}}>
                  <CartIcon style={{marginRight:'5px'}}/>Cart
                </Button>
              </Hidden>

              <Hidden mdUp>
                <MenuMobile navConfig={navConfig} />
              </Hidden>
            </Stack>
          </MContainer>
        </ToolbarStyle>
      </AppBar>
      <Box sx={{ height: APP_BAR_DESKTOP }}></Box>
    </>
  );
}
