import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import circle1 from "../../images/users/circle1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";

function createData(
  profile_image,
  name,
  project,
  task,
  email,
  assigned,
  staff,
  status,
  action
) {
  return {
    profile_image,
    name,
    project,
    task,
    email,
    assigned,
    staff,
    status,
    action,
  };
}

const rows = [
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "52 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-success">Paid</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "15 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-info">Draft</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-success">Paid</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-info">Draft</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-danger">Pending</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-info">Draft</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-info">Draft</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-danger">Pending</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-success">Paid</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-success">Paid</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-danger">Pending</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-success">Paid</span>
  ),
  createData(
    circle1,
    "John Doe  ",
    "	Box of Crayons",
    "5 Task",
    "myemail@gmail.com",
    "23/02/2022",
    "img",
    <span className="badge-danger">Pending</span>
  ),
];

export const Team = () => {
  return (
    <section className="content">
      <div className="dash">
        <h4>Team Leaders</h4>
      </div>
      <div className="task-list1">
        <TableContainer component={Paper} className="table">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>LEADER NAME</b>
                </TableCell>
                <TableCell align="center">
                  <b>PROJECT</b>
                </TableCell>
                <TableCell align="center">
                  <b>TOTAL TASK</b>
                </TableCell>
                <TableCell align="center">
                  <b>EMAIL</b>
                </TableCell>
                <TableCell align="center">
                  <b> PROJECT ASSIGNED</b>
                </TableCell>
                <TableCell align="center">
                  <b>ASSIGNED STAFF</b>
                </TableCell>
                <TableCell align="center">
                  <b>STATUS</b>
                </TableCell>
                <TableCell align="center">
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
                  <TableCell className="p-3" component="th" scope="row">  <img  src={row.profile_image} alt="" /><br></br>{row.name}</TableCell>
                  <TableCell align="center">{row.project}</TableCell>
                  <TableCell align="center">{row.task}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.assigned}</TableCell>
                  <TableCell align="center" className="img-button">
                    <img src={row.profile_image} alt=""  />
                    <img src={row.profile_image} alt=""  />
                    <img src={row.profile_image} alt=""  />
                    <img src={row.profile_image} alt=""  />
                    <button
                      className="btn btn-warning"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#invite"
                    >
                      +
                    </button>
                  </TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center" className="action d-flex">
                    <button type="button" className="edit">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button type="button" className="trash">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="modal" id="invite">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Employee Invitation</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <label>Email address :</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <div className="input-group-append">
                    <span>
                      <button
                        type="button"
                        className="btn btn-warning m-0"                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </span>
                  </div>
                </div>
              </form>
              <h4>Employee</h4>
              <ul className="employee-invite">
              <li>
                  <div className="invoite-list ">
                    <img src={circle1} alt="" />
                    <div className="name">
                      <h5>John Doe  </h5>
                      <p>Boffincoders</p>
                      <button type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faTrash} /> Delete Member
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="invoite-list ">
                    <img src={circle1} alt="" />
                    <div className="name">
                      <h5>John Doe  </h5>
                      <p>Boffincoders</p>
                      <button type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faTrash} /> Delete Member
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="invoite-list ">
                    <img src={circle1} alt="" />
                    <div className="name">
                      <h5>John Doe  </h5>
                      <p>Boffincoders</p>
                      <button type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faTrash} /> Delete Member
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="invoite-list ">
                    <img src={circle1} alt="" />
                    <div className="name">
                      <h5>John Doe  </h5>
                      <p>Boffincoders</p>
                      <button type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faTrash} /> Delete Member
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
