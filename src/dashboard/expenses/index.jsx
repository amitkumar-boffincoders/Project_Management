import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function projectDate(item, order, date, from, status, action) {
  return { item, order, date, from, status, action };
}

const rows = [
  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-success">Paid</span>
  ),
  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-danger">Pending</span>
  ),
  projectDate(
    "#00004",
    "Social Geek Made",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-success">Paid</span>
  ),
  projectDate(
    "#00004",
    "Practice to Perfect",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-danger">Pending</span>
  ),
  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-info">Draft</span>
  ),

  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-success">Paid</span>
  ),
  projectDate(
    "#00004",
    "Practice to Perfect",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-info">Draft</span>
  ),
  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-danger">Pending</span>
  ),
  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-info">Draft</span>
  ),
  projectDate(
    "#00004",
    "Practice to Perfect",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-success">Paid</span>
  ),
  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-info">Draft</span>
  ),
  projectDate(
    "#00004",
    "Practice to Perfect",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-success">Paid</span>
  ),
  projectDate(
    "#00004",
    "Box of Crayons",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-danger">Pending</span>
  ),
  projectDate(
    "#00004",
    "Practice to Perfect",
    "John Doe  ",
    "28-02-2021",
    "Airtel Portal",
    <span className="badge-success">Paid</span>
  ),
];

export const Expenses = () => {
  return (
    <div>
      <section className="content">
        <div className="dash">
          <h4>Expenses</h4>
        </div>
        <div className="task-list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table"  className="expenses">
              <TableHead>
                <TableRow>
                  <TableCell>EXP ID</TableCell>
                  <TableCell align="right">
                    {" "}
                    <b>ITEM</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>ORDER BY</b>{" "}
                  </TableCell>
                  <TableCell align="right">
                    <b>DATE</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>FROM</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>STATUS</b>{" "}
                  </TableCell>
                  <TableCell align="right">
                    <b>ACTIONS</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.item}</TableCell>
                    <TableCell align="right">{row.order}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.from}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.action}</TableCell>
                    <TableCell align=" d-flex flex-row-reverse">
                      <div className="action d-flex">
                        <button type="button" className="edit">
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button type="button" className=" trash">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
};
export default Expenses;
