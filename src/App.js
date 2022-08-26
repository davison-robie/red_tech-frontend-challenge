import OrdersDashboard from "./components/OrdersDashboard";
import Header from "./components/Header";
import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <OrdersDashboard />
    </Fragment>
  );
}

export default App;
