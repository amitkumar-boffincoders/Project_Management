import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../pages/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import InputLabel from "@mui/material/InputLabel";
import { TextareaAutosize } from "@material-ui/core";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@material-ui/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SidebarContext } from '../../context-api/sidebar.context'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(e) { }
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Sidebar = () => {

      // sidenav
      const { isVisible, setIsVisible } = useContext(SidebarContext);

      // sidenav
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const [routesState, setRoutesState] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  useEffect(() => {
    (() => {
      setRoutesState(routes);
    })();
  }, [routes]);
  return (

    <div className={`${isVisible ? "left side-menu invisible": "left side-menu "} `}>

      <div className="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
          <ul>
            {routesState.map((value, key) => {
              return (
                <>
                  <li
                    className={value.isOpen ? "active" : ""}
                    key={value.key}
                    onClick={() => {
                      if (value?.subpaths.length > 0)
                        routes.forEach((x) => {
                          if (x.key === value.key) value.isOpen = !value.isOpen;
                        });
                    }}
                  >
                    <div className="dropdown">
                      {value.subpaths.length > 0 ? (
                        <>
                          <button
                            type="button"
                            className="btn dropdown-toggle waves-effect"
                            data-bs-toggle="dropdown"
                          >
                            <FontAwesomeIcon icon={value.icon} />
                            <span className="title"> {value.name} </span>
                          </button>
                          {value?.subpaths?.length > 0 && (
                            <ul className="dropdown-menu">
                              {value.subpaths.map((subpath) => (
                                <li>
                                  <Link to={value.link + "/" + subpath.link}>
                                    <span className="title">
                                      {subpath.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <NavLink to={value.link} className="waves-effect">
                          <FontAwesomeIcon icon={value.icon} />
                          <span className="title"> {value.name} </span>
                        </NavLink>
                      )}
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="new-task">
            <button className="d-flex" onClick={handleOpen}>
              <FontAwesomeIcon icon={faAdd} />
              <h4>Add New Task</h4>
            </button>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="modal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div className="dash">
                <h4>Add New Project</h4>
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <form>
                <div className="row">
                  <div className="col-sm-6 p-3">
                    <label>Project Title</label>
                    <br />
                    <TextField
                      required
                      id="outlined-required"
                      className="col-sm-12"
                      label="Project Title"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label>Project Categories</label>
                    <FormControl
                      className="col-sm-12"
                      sx={{ m: 1, width: "100%" }}
                    >
                      <InputLabel id="demo-multiple-name-label">
                        Name
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-sm-6">
                    <label>From:</label>
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <MobileDatePicker
                          label="From Date"
                          inputFormat="MM/dd/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                  <div className="col-sm-6">
                    <label>To:</label>
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <MobileDatePicker
                          label="From Date"
                          inputFormat="MM/dd/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </div>
                  <div className="col-sm-12 mt-3">
                    <label className="mb-1">Project Discription Title</label>
                    <br />
                    <TextareaAutosize
                      required
                      className="col-sm-12"
                      style={{ height: "20vh" }}
                      id="outlined-required"
                      label="Project Title"
                      defaultValue="Hello World"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <button type="text" className="btn btn-warning" style={{ padding: "6px 55px", borderRadius: "10px" }}>Add</button>
                  </div>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div >

  );
};

export default Sidebar;
