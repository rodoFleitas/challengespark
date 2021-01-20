import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormEditRegister from "./FormEditRegister";
import { useStyles } from "./styles";
import HighchartsUser from "./HighchartsUser";

export default function TransitionsModal({ open, handleClose, user, type }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.papermodal}>
            {type === "edit" ? (
              <FormEditRegister
                edit={true}
                user={user}
                handleClose={handleClose}
              />
            ) : (
              <HighchartsUser user={user}/>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
