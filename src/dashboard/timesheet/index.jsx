import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function projectTime(name, Day1, Day2, Day3, Day4, Day5, Day6) {
  return { name, Day1, Day2, Day3, Day4, Day5, Day6 };
}
const rows = [
  projectTime(
    "Apple",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Tesla",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Appache",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Microsoft",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Adobe",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Samsung",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),

  projectTime(
    "Realme",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Mahindra",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "TATA",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "BAJAJ",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Amazon",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
  projectTime(
    "Flipcart",
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />,
    <input type="time" placeholder="02:24 AM" />
  ),
];

export const Timesheet = () => {
  return (
    <section class="content">
      <div class="d-flex justify-content-between">
        <div class="p-2 dash">
          <h4>Project Timesheet</h4>
        </div>
        <div class="p-2 d-flex">
          <button
            type="button"
            class="btn btn-warning sheet"
            data-bs-toggle="modal"
            data-bs-target="#sheet"
          >
            <FontAwesomeIcon icon={faFile} />
            Sheets Sent
          </button>
        </div>
      </div>

      <div className="task-list">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>PROJECT NAME</b>
              </TableCell>
              <TableCell align="right">
                <b>MON</b>
              </TableCell>
              <TableCell align="right">
                <b>TUE</b>
              </TableCell>
              <TableCell align="right">
                <b>WED</b>
              </TableCell>
              <TableCell align="right">
                <b>THU</b>
              </TableCell>
              <TableCell align="right">
                <b>FRI</b>
              </TableCell>
              <TableCell align="right">
                <b>SAT</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}{" "}
                </TableCell>
                <TableCell align="right">{row.Day1}</TableCell>
                <TableCell align="right">{row.Day2}</TableCell>
                <TableCell align="right">{row.Day3}</TableCell>
                <TableCell align="right">{row.Day4}</TableCell>
                <TableCell align="right">{row.Day5}</TableCell>
                <TableCell align="right">{row.Day6}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
export default Timesheet;
