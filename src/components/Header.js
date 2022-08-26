import { Fragment } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <Fragment>
      <header position="static">
        <h1>R</h1>
        <span>
          <SettingsIcon />
          <AccountCircleIcon />
        </span>
      </header>
    </Fragment>
  );
}

export default Header;
