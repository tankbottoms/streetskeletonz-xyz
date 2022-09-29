import { Box, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function CarouselArrow({ direction, onClick }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
      sx={{
        cursor: "pointer",
        bgcolor: "#1c1c1c",
        borderRadius: "50%",
        transition: "all 0.3s",
        width: 40,
        height: 40
      }}
    >
      {direction === "prev" ? <ArrowBackIosNewIcon sx={{ fontSize: 16, color: "white" }} /> : <ArrowForwardIosIcon sx={{ fontSize: 16, color: "white" }} />}
    </Stack>
  );
}
