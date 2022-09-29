import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  ListSubheader,
  CardActionArea,
  Typography,
} from "@mui/material";

// ----------------------------------------------------------------------

const LinkStyle = styled(Typography)(({ theme }) => ({
  fontSize: '16px !important',
  cursor: 'pointer',
  fontWeight: 500,
  color: "#242323",
  marginRight: theme.spacing(5),
  letterSpacing:'0.01em',
  textDecoration: "none",
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    color: "#FFC107",
  },
  [theme.breakpoints.down("lg")]: {
    marginRight: theme.spacing(4)
  }
}));

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create("color"),
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

function MenuDesktopItem({ item, isHome, isOpen, isOffset, onOpen, onClose }) {
  const { title, path, children } = item;
  console.log(path.slice(2))

  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            ...(isHome && { color: "common.white" }),
            ...(isOffset && { color: "text.primary" }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Box component={Icon} sx={{ ml: 0.5, width: 16, height: 16 }} />
        </LinkStyle>
      </>
    );
  }

  return (
    <LinkStyle
      component={ScrollLink}
      to={path.slice(2)}
      spy
      smooth
      sx={{
        "&.active": {
          color: "warning.main",
        },
      }}
    >
      {title}
    </LinkStyle>
  );
}

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}
