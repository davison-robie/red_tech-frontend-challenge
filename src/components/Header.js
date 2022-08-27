import { Fragment } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar position="static">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            R
          </Typography>

          <SettingsIcon sx={{ mr: 2 }} />
          <AccountCircleIcon />
        </Toolbar>
      </Box>
    </Fragment>
  );
}

export default Header;
