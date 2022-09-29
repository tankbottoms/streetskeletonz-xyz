import PropTypes from "prop-types";
// material
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();

  return   <>
              <div class="THE-MINERS-SUPPLY-CO-1-outer">
              <div
                id="THE-MINERS-SUPPLY-CO-1"
                data-name="THE MINERS SUPPLY CO."
                class="THE-MINERS-SUPPLY-CO-1"
              ><div key="0">
              <div class="logo-1-outer">
              <img
                id="logo-1"
                data-name="logo 1"
                alt="logo 1"
                class="logo-1"
              />
              </div>THE&nbsp;MINERS&nbsp;SUPPLY&nbsp;CO.</div>
              </div>
              </div>
            
            </>
}


