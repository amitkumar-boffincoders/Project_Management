import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import profile from "../../images/users/profile.png";
import logo from "../../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { invoice_data} from "./invoice-data"
import {
  faDownload,
  faShareAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Website Redesign", 15, "$1,500", "$22,500"),
  createData("Logo & Identity", 15, "$1,500", "$22,500"),
  createData("Marketing Collateral", 15, "$1,500", "$22,500"),
  createData("Website Redesign", 15, "$1,500", "$22,500"),
];

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="dash">
        <h4>Invoices</h4>
      </div>
      <div className="invoice-list">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            className="tab d-flex flex-row-reverse"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                className="btn btn-warning p-3 m-2"
                label="Invoice List"
                value="1"
              />
              <Tab
                className="btn btn-warning p-3  m-2"
                label="Simple Invoices"
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1" className="p-0">
            <ul className="invoices">
            {
            invoice_data.map(post =>{
             return(
              <li>
                <div className="d-flex justify-content-around location">
                  <div className="p-2 d-flex">
                    <img src={profile} alt="" />
                    <div className="name">
                      <h5>{post.name}</h5>
                      <p>{post.company}</p>
                    </div>
                  </div>

                  <div className="p-2">
                    <address>{post.address}</address>
                    <p>{post.amount}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around mb-3">
                  <div className="p-2">
                    <p className="pt-3">
                      <b>Applied on:</b> {post.date}
                    </p>
                  </div>

                  <div className="p-3 d-flex">
                    <button type="button" className="btn-primary">
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                    <button type="button" className="btn-warning">
                      <FontAwesomeIcon icon={faShareAlt} />
                    </button>
                    <button type="button" className="btn-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </li>
              ) 
            
            })
        }
             
         
            </ul>
          </TabPanel>
          <TabPanel value="2">
      
            <TableContainer component={Paper}>
            <div className="m-3">
            <img src={logo} alt="" />
            </div>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
            
              <TableHead>
                  <TableRow>
                    <TableCell><b>Description</b></TableCell>
                    <TableCell align="right"> <b>Days</b></TableCell>
                    <TableCell align="right"><b>Price</b></TableCell>
                    <TableCell align="right"><b>Total</b></TableCell>
                  </TableRow>
                </TableHead>
                   

               
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer component={Paper} className="mt-3">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h5>Subtotal</h5>
                      <h6>#40,000</h6>
                      Australia
                    </TableCell>
                   
                    <TableCell align="right" >
                      <h5>Total</h5>
                      <h6>$42,500</h6>
                      Australia
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <h5>Bank Details</h5>
                      <h6>Bank Name : ADS BANK</h6>
                      <h6>Swift Code : ADS1234Q</h6>
                      <h6>Account Holder : Jelly Pepper</h6>
                      <h6>Account Number : 5454542WQR</h6>
                      Australia
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabContext>
      </Box>
      </div>
    </section>
  );
}
