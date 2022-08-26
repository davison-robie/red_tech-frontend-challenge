import { Fragment, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

export default function DataTable(props) {
  const [checked, setChecked] = useState(false);
  const isSelected = (row) => props.selected.indexOf(row) !== -1;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function orderTypeFilter(order) {
    return order.orderType == props.orderType;
  }

  function searchBarFilter(order) {
    return order.orderType === props.orderType;
  }

  const filteredDataArray =
    props.orderType === "All Orders"
      ? props.data
      : props.data.filter(orderTypeFilter);

  return (
    <Fragment>
      {filteredDataArray.length === 0 ? (
        <div>There are no orders to show...</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="orders">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox color="warning" />
                </TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell align="right">Creation Date</TableCell>
                <TableCell align="right">Created By</TableCell>
                <TableCell align="right">Order Type</TableCell>
                <TableCell align="right">Customer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredDataArray.map((row, index) => {
                const isItemSelected = isSelected(row.orderId);
                // const labelId = `table-checkbox-${index}`;
                return (
                  <Fragment>
                    <TableRow
                      hover
                      key={row.orderId}
                      onClick={() => {
                        props.handleClick(row.orderId);
                      }}
                    >
                      <TableCell>
                        <Checkbox color="warning" checked={isItemSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.orderId}
                      </TableCell>
                      <TableCell align="right">{row.createdDate}</TableCell>
                      <TableCell align="right">
                        {row.createdByUserName}
                      </TableCell>
                      <TableCell align="right">{row.orderType}</TableCell>
                      <TableCell align="right">{row.customerName}</TableCell>
                    </TableRow>
                  </Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Fragment>
  );
}
