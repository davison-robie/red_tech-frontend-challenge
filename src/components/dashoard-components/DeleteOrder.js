import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DeleteOrder(props) {
  return (
    <Fragment>
      <Modal
        open={props.deleteOpen}
        onClose={props.closeDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack>
            <Button
              variant="contained"
              sx={{ ml: "1.5rem" }}
              startIcon={<DeleteIcon />}
              onClick={() => {
                props.confirmDeleteOrders();
              }}
            >
              Delete Selected
            </Button>
            <Button
              variant="contained"
              sx={{ ml: "1.5rem" }}
              startIcon={<DeleteIcon />}
              onClick={() => {
                props.confirmDeleteOrders();
              }}
            >
              Nevermind
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default DeleteOrder;
