import React from "react";
import "../../scss/project-info/information.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseClock,
  faHandHolding,
  faListCheck,
  faRunning,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";



function createData(
  no,
  task,
  priority,
  start,
  deadline,
  progress,
  status,
  action
) {
  return { no, task, priority, start, deadline,progress,status,action };
}

const rows = [
  createData('1', <a href="" className="d-flex ">Design Updated</a>, <span className="badge badge-danger-light">High</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"30%"}}></div>,<span className="badge badge-danger">Dealy</span>),
  createData('2', <a href="" className="d-flex ">Website Development</a>, <span className="badge badge-success">Low</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"50%"}}></div>,<span className="badge badge-success">Dealy</span>),
  createData('3', <a href="" className="d-flex ">Digital Marketing</a>, <span className="badge badge-warning">Medium</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"20%"}}></div>,<span className="badge badge-danger">Dealy</span>),
  createData('4', <a href="" className="d-flex ">Ad Analusis</a>, <span className="badge badge-danger-light">High</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"40%"}}></div>,<span className="badge badge-warning">Dealy</span>),
  createData('5', <a href="" className="d-flex ">App Development</a>, <span className="badge badge-danger-light">Low</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"15%"}}></div>,<span className="badge badge-success">Dealy</span>),
  createData('6', <a href="" className="d-flex ">Web Designing</a>, <span className="badge badge-warning">Medium</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"5%"}}></div>,<span className="badge badge-warning">Dealy</span>),
  createData('7', <a href="" className="d-flex ">Content Marketing</a>, <span className="badge badge-danger">Low</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"75%"}}></div>,<span className="badge badge-danger">Dealy</span>),
  createData('8', <a href="" className="d-flex ">Design Updated</a>, <span className="badge badge-danger-light">High</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"43%"}}></div>,<span className="badge badge-success">Dealy</span>),
  createData('9', <a href="" className="d-flex ">Digital Marketing</a>, <span className="badge badge-danger-light">Low</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"82%"}}></div>,<span className="badge badge-warning">Dealy</span>),
  createData('10', <a href="" className="d-flex ">App Development</a>, <span className="badge badge-warning">Low</span>, '12-02-2021','05-04-2021',<div className="progress-bar bg-primary "style={{width:"100%"}}></div>,<span className="badge badge-success">Dealy</span>), 
];



export const Project_info = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [age] = React.useState("");

  return (
    <div>
      <section className="info">
        <div className="task-list">
          <h1>Project Information</h1>
          <div className="row">
            <div className="col-sm-3">
              <div className="status">
                <FontAwesomeIcon icon={faBriefcaseClock} />
                <div className="task-brief">
                  <h4>Total Task</h4>
                  <p>1225</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="status1">
                <FontAwesomeIcon icon={faRunning} />
                <div className="task-brief">
                  <h4>Running Task</h4>
                  <p>154+</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="status2">
                <FontAwesomeIcon icon={faHandHolding} />
                <div className="task-brief">
                  <h4>On Hold Task</h4>
                  <p>75+</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="status3">
                <FontAwesomeIcon icon={faListCheck} />
                <div className="task-brief">
                  <h4>Complete Task</h4>
                  <p>+120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="task-list">
          <form>
            <div className="row">
              <div className="col-sm-3">
                <div className="mb-3 mt-3">
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
              </div>
              <div className="col-sm-3">
                <div className="mb-3 mt-3">
                  <label>To:</label>
                  <br />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <MobileDatePicker
                        label="To Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="mb-3 mt-3">
                  <label>Select Priority:</label>
                  <br />

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Priority
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>High</MenuItem>
                      <MenuItem value={20}>Medium</MenuItem>
                      <MenuItem value={30}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="col-sm-3">
                <button type="button" className="btn btn-warning ">
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="box-body">
            <div className="table-responsive">
              <div
                id="task-profile_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
                        <TableHead>
                          <TableRow>
                            <TableCell><b>No</b></TableCell>
                            <TableCell ><b>Task</b></TableCell>
                            <TableCell ><b>Priority</b></TableCell>
                            <TableCell ><b>Start Date</b></TableCell>
                            <TableCell ><b>Deadline</b></TableCell>
                            <TableCell ><b>Progress</b></TableCell>
                            <TableCell ><b>Work Status</b></TableCell>
                            <TableCell><b>Actions</b></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.no}
                              </TableCell>
                              <TableCell>{row.task}</TableCell>
                              <TableCell >{row.priority}</TableCell>
                              <TableCell >{row.start}</TableCell>
                              <TableCell >{row.deadline}</TableCell>
                              <TableCell >{row.progress}
                              <div className="progress progress-sm">{row.progress}</div></TableCell>
                              <TableCell >{row.status}</TableCell>
                              <TableCell align="center"><a
                              href="javascript:void(0);"
                              className="btn-link"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <FontAwesomeIcon icon={faEllipsis} />
                            </a></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project_info;
