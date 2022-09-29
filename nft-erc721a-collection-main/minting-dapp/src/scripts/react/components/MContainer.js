// material
import { Container } from "@mui/material";

// ----------------------------------------------------------------------

export default function MContainer({ children, sx, id }) {
  return (
    <Container maxWidth="lg" sx={{ px: { lg: "165px !important", md: "42px !important", sm: "16px !important" }, ...sx }} id={id}>
      {children}
    </Container>
  );
}
