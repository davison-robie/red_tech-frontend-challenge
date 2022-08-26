import React, { useState } from "react";
import { Fragment } from "react";
import { Toolbar } from "@mui/material";
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";

function CreateOrder(props) {
  const [orderId, setOrderId] = useState("");
  const [orderType, setOrderType] = useState("Standard");
  const [customerName, setCustomerName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [createdByUserName, setCreatedByUserName] = useState("");

  const submitNewOrder = () => {
    // e.preventDefault();
    fetch(props.baseUrl, {
      method: "POST",
      body: JSON.stringify({
        orderId: orderId,
        orderType: orderType,
        customerName: customerName,
        createdDate: createdDate,
        createdByUserName: createdByUserName,
      }),
      headers: props.myHeaders,
    })
      .then((res) => res.json())
      .then((ordersData) => {
        setOrderId("");
        setOrderType("Standard");
        setCustomerName("");
        setCreatedDate("");
        setCreatedByUserName("");
        props.getOrders();
        console.log(ordersData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Box sx={{ maxWidth: "50rem", marginTop: "1rem" }}>
        <Stack spacing={2}>
          <Button
            sx={{ maxWidth: 300 }}
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => {
              props.createOrder();
            }}
          >
            Back to Order List
          </Button>
          <FormControl size="small" sx={{ minWidth: 300, maxWidth: "50rem" }}>
            <InputLabel>Order Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderType}
              label="Order Type"
              onChange={(e) => setOrderType(e.target.value)}
            >
              <MenuItem value="Standard">Standard</MenuItem>
              <MenuItem value="SaleOrder">Sale Order</MenuItem>
              <MenuItem value="PurchaseOrder">Purchase Order</MenuItem>
              <MenuItem value="TransferOrder">Transfer Order</MenuItem>
              <MenuItem value="ReturnOrder">Return Order</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="customer"
            label="Customer"
            variant="outlined"
            size="small"
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <TextField
            id="createdBy"
            label="Created By"
            variant="outlined"
            size="small"
            onChange={(e) => setCreatedByUserName(e.target.value)}
          />
          <TextField
            id="orderId"
            label="Order ID"
            variant="outlined"
            size="small"
            onChange={(e) => setOrderId(e.target.value)}
          />
          <TextField
            id="createdDate"
            label="Creation Date"
            variant="outlined"
            size="small"
            onChange={(e) => setCreatedDate(e.target.value)}
          />
          <Button
            sx={{ maxWidth: 300 }}
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              submitNewOrder();
            }}
          >
            Submit New Order
          </Button>
        </Stack>
      </Box>
    </Fragment>
  );
}

export default CreateOrder;
