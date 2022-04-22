import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, } from "@fortawesome/free-solid-svg-icons";
import Modal from '@material-ui/core/Modal';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function SimpleModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <button type="button" onClick={handleOpen} ><FontAwesomeIcon icon={faPen} /></button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="dash">
                        <h4> Edit Client</h4>
                    </div>
                    <form action="/action_page.php">
                        <div className="Form-group p-3">
                            <label for="email">Client Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="John Doe  "
                                id="email"
                            />

                        </div>
                        <div className="form-group p-3">
                            <label for="pwd">Company Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apple"
                                id="pwd"
                            />
                        </div>
                        <div className="row p-3">
                            <div className="form-group col-sm-6">
                                <label for="email">User Name:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="User 123"
                                    id="email"
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <label for="pwd">Phone:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="12345678"
                                    id="pwd"
                                />
                            </div>
                            <div className="form-group pt-3 col-sm-6">
                                <label for="email">Email address:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    id="email"
                                />
                            </div>
                            <div className="form-group pt-3 col-sm-6">
                                <label for="pwd">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    id="pwd"
                                />
                            </div>
                        </div>
                        <div className="form-group p-3 col-sm-12">
                            <label for="pwd">Discription:</label>

                            <textarea
                                className="form-control"
                                name="message"
                                rows="50"
                                cols="30"
                            >
                                Lorem ipsum dolor sit amet consectetur
                            </textarea>
                        </div>
                    </form>
                    <div className="text-center">
                        <button type="button" className="btn btn-warning">Save</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}