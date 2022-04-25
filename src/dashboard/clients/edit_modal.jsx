import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, } from "@fortawesome/free-solid-svg-icons";
import Modal from '@material-ui/core/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '7px',
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button type="button" onClick={handleOpen} ><FontAwesomeIcon icon={faPen} /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className="dash">
                            <h4> Edit Client</h4>
                        </div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form action="/action_page.php">
                            <div className="row p-3">
                                <div className="form-group col-sm-6 ">
                                    <label for="pwd">Client Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apple"
                                        id="pwd"
                                    />
                                </div>
                                <div className="form-group col-sm-6 ">
                                    <label for="pwd">Company Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apple"
                                        id="pwd"
                                    />
                                </div>
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
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}