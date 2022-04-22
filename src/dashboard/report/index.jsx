import React from "react";
import circle1 from "../../images/users/circle1.png";
import "../../scss/report/report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  profile_image,
  name,
  rating,
  weekly,
  work,
  note

) {
  return { profile_image, name, rating, weekly, work,note};
}

const rows = [
  createData(circle1,"John Doe  ", '70%',<span className="postive">+20%</span>, "80%", 'No complaints here'),
  createData(circle1,"Sandeep kumar", '70%',<span className="negtive">-5%</span>, "80%", 'No complaints this week'),
  createData(circle1,"Santosh kumar", '70%',<span className="postive">+20%</span>, "60%", 'Found criticle error'),
  createData(circle1,"Sandeep kumar", '70%',<span className="negtive">-20%</span>, "100%", 'Slept for half the time'),
  createData(circle1,"Santosh kumar", '70%',<span className="negtive">-20%</span>, "40%", 'Brought cookies for all the time'),

];



const Report = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <section className="content">
        <div className="task-list">
          <div className="date-picker">
            <div className="dash">
            <h4>Report</h4>
            </div>
            <h1>Week 12, March 19-25</h1>
            <div className="col-sm-3 pb-3">
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

            <div className="row">
              <div className="col-sm-3 text-center">
                <div className="progress blue">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">90%</div>
                </div>
                <h5>Average rating</h5>
              </div>
              <div className="col-sm-3 text-center">
                <div className="progress yellow">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">75%</div>
                </div>
                <h5>Weekly Change</h5>
              </div>
              <div className="col-sm-3 text-center">
                <div className="progress blue">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">20%</div>
                </div>
                <h5>Weekly Work Done</h5>
              </div>
              <div className="col-sm-3 text-center">
                <div className="progress yellow">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">50%</div>
                </div>
                <h5>Total Work Done</h5>
              </div>
            </div>
          </div>
          <Table sx={{ minWidth: 650 }} className="table-report" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Rating</b></TableCell>
            <TableCell><b>Weekly Change</b></TableCell>
            <TableCell><b>Work Done</b></TableCell>
            <TableCell align="left"><b>Notes</b></TableCell>
            <TableCell><b>More</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <img src={row.profile_image}/> {row.name}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell >{row.weekly}</TableCell>
              <TableCell>{row.work}</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell>
              <button type="text">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
         
        </div>
      </section>
    </div>
  );
};
export default Report;
