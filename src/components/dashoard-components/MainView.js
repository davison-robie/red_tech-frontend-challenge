import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "./Table";
import { Fragment } from "react";

function MainView(props) {
  return (
    <Fragment>
      <Toolbar>
        <TextField
          id="customerSearch"
          label="Customer Search"
          variant="outlined"
          size="small"
        />

        <Button
          variant="contained"
          sx={{ ml: "1.5rem" }}
          startIcon={<AddIcon />}
          onClick={() => {
            props.createOrder();
          }}
        >
          Create Order
        </Button>

        <Button
          variant="contained"
          sx={{ ml: "1.5rem" }}
          startIcon={<DeleteIcon />}
          onClick={() => {
            props.deleteOrders(props.selected);
          }}
        >
          Delete Selected
        </Button>

        <FormControl size="small" sx={{ minWidth: 300, ml: "1.5rem" }}>
          <InputLabel>Order Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.orderType}
            label="Order Type"
            onChange={props.handleChange}
          >
            <MenuItem value="All Orders">All Orders</MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="SaleOrder">Sale Order</MenuItem>
            <MenuItem value="PurchaseOrder">Purchase Order</MenuItem>
            <MenuItem value="TransferOrder">Transfer Order</MenuItem>
            <MenuItem value="ReturnOrder">Return Order</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
      {props.loading && <div>A moment please...</div>}
      {props.error && (
        <div>{`There is a problem fetching the post data - ${props.error}`}</div>
      )}
      {props.data && (
        <DataTable
          orderType={props.orderType}
          data={props.data}
          handleClick={props.handleClick}
          selected={props.selected}
        />
      )}
    </Fragment>
  );
}

export default MainView;
