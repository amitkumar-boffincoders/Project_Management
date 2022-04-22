import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Payment = () => {
  function projectDate(no, project, startdate, enddate, amount, status) {
    return { no, project, startdate, enddate, amount, status };
  }

  const rows = [
    projectDate(
      "#00004",
      "Box of Crayons",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-success">Paid</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-danger">Pending</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-success">Paid</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-danger">Pending</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-info">Draft</span>
    ),

    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-success">Paid</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-info">Draft</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-danger">Pending</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-info">Draft</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-success">Paid</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-info">Draft</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-success">Paid</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-danger">Pending</span>
    ),
    projectDate(
      "#00004",
      "	Practice to Perfect",
      "28-02-2021",
      "28-05-2021",
      "$1245",
      <span className="badge-success">Paid</span>
    ),
  ];

  return (
    <div>
      <section className="content">
        <div className="dash">
          <h4>Payments</h4>
        </div>
        <div className="task-list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>NO</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>PROJECT</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>DATE START</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>DATE END</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>AMOUNT</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>STATUS</b>{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="number" align="left">{row.no}</TableCell>
                    <TableCell align="right">{row.project}</TableCell>
                    <TableCell align="right">{row.startdate}</TableCell>
                    <TableCell align="right">{row.enddate}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
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
export default Payment;
