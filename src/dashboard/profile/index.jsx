import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  faMobileAlt,
  faEnvelopeOpen,
  faGift,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../../images/users/profile.png";

function createData(
  id: number,
  name: name,
  start: Date,
  end: Date,
  amount: number,
  status: String,
)
 {
  return { id, name, start, end, amount, status };
}

const rows = [
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span className="badge-success">Paid</span>),
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span class="badge-success">Paid</span>),
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span class="badge-info">Draft</span>),
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span class="badge-danger">Pending</span>),
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span className="badge-success">Paid</span>),
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span class="badge-danger">Pending</span>),
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span className="badge-success">Paid</span>),
  createData('#0004','Practice to Perfect', '28-02-2021', '05-03-2021', '$1245', <span class="badge-info">Draft</span>),
  
];


export const Profile = () => {
  return (

    <section class="profile_edit content" style={{background: "#fff"}}>
    <div class="row">
      <div class="col-sm-8">
        <div class="all-client">
          <div class="dash">
            <h4 class="p-3">Profile</h4>
          </div>
          <div class="client-screen">
            <div class="row">
              <div class="col-sm-3">
                <div class="all-client edit-image text-center">
                <img src={profile} alt=""/>
                  <h5>CEO</h5>
                  <p>CLIENT ID : PXL-0001</p>

                </div>
              </div>
              <div class="col-sm-9">
                <div class="all-client pt-3">
                  <div class="edit-content">
                    <h4>Google</h4>
                    <label>John Doe  </label>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et veniam soluta iste neque,
                    </p>
                    <div class="row">
                      <div class="col-sm-6">
                        <span>
                        <FontAwesomeIcon icon={faMobileAlt} />
                          <p>202-555-0174</p>
                        </span>
                      </div>
                      <div class="col-sm-6">
                        <span>
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                          <p>mymail@gmail.com</p>
                        </span>
                      </div>
                      <div class="col-sm-6">
                        <span>
                        <FontAwesomeIcon icon={faGift} />
                          <p>19/03/1980</p>
                        </span>
                      </div>
                      <div class="col-sm-6">
                        <span>
                        <FontAwesomeIcon icon={faLocation} />
                          <p>
                            201,202 industrial Area Sector 74, Punjab 02334.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="all-client">
          <div class="dash">
            <h4 class="p-3">Client Invoice</h4>
          </div>
          <div class="client-incoice">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>NO</b></TableCell>
            <TableCell><b>PROJECT</b></TableCell>
            <TableCell align="right"><b>DATE START</b></TableCell>
            <TableCell align="right"><b>DATE END</b></TableCell>
            <TableCell align="right"><b>AMOUNT</b></TableCell>
            <TableCell align="right"><b>STATUS</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            key={row.no}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" className="number" scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row"> {row.name} </TableCell>
              <TableCell align="right">{row.start}</TableCell>
              <TableCell align="right">{row.end}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="all-client">
          <div class="dash">
            <h4 class="p-3">Client Task</h4>
          </div>
          <div class="task">
            <span>UI/UX Design</span>
            <div class="d-flex flex-row-reverse">
              <label class="badge-danger p-1">Pending</label>
            </div>
            <p class="pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Est corporis vero aspernatur eos natus dicta iusto, odit
              assumenda autem, fuga iste delectus. Praesentium, quam quas?
              Natus molestias enim animi sapiente.
            </p>
            <div class="d-flex flex-row-reverse">
              <h6 class="badge-warning">Project Name</h6>
            </div>
          </div>
          <div class="task">
            <span>App Development</span>
            <div class="d-flex flex-row-reverse">
              <label class="badge-success p-1">Completed</label>
            </div>
            <p class="pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Est corporis vero aspernatur eos natus dicta iusto, odit
              assumenda autem, fuga iste delectus. Praesentium, quam quas?
              Natus molestias enim animi sapiente.
            </p>
            <div class="d-flex flex-row-reverse">
              <h6 class="badge-warning">Project Name1</h6>
            </div>
          </div>
          <div class="task">
            <span>Website Design</span>
            <div class="d-flex flex-row-reverse">
              <label class="badge-info p-1">Reiew</label>
            </div>
            <p class="pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Est corporis vero aspernatur eos natus dicta iusto, odit
              assumenda autem, fuga iste delectus. Praesentium, quam quas?
              Natus molestias enim animi sapiente.
            </p>
            <div class="d-flex flex-row-reverse">
              <h6 class="badge-warning">Project Name2</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center m-3">
        <button type="button" class="btn btn-warning"><i class="ti-pencil-alt"></i> Edit Profile</button>
      </div>
    </div>
  </section>
  );
};

export default Profile;
