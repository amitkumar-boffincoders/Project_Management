import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import bin from "../../images/users/bin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, } from "@fortawesome/free-solid-svg-icons";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function AnimatedModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <button type="button" onClick={handleOpen} ><FontAwesomeIcon icon={faTrash} /></button>
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
                    <div className={classes.paper}>
                        <div className="dash">
                            <h4>Delete item Permanently?</h4>
                        </div>
                        <h5>You can only delete this item Permanently</h5>
                        <div className="text-center p-3">
                            <img src={bin} width="50%" alt="" />
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-warning">Delete</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}