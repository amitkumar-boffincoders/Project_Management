import React from "react";
import { Donut } from "../pages/graph/pi-donut";
import { Task } from "../pages/graph/task";
import { WeeklyChart } from "../pages/graph/weekly_chart";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";
import Badge from '@mui/material/Badge';
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

const DashboardContent = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <section className="welcome">
      <div className="row">
        <div className="col-sm-9">
          <div class="d-flex justify-content-between">
            <div className="dash">
              <h4>Dashboard</h4>
              <h6>
                <span>Sunday</span>,18 February 2022
              </h6>
            </div>
            <div className="dash1">
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

          <div className="User">
            <h2>Welcome John Doe  </h2>
            <p>
              You have 2 project to finish and already completed 68% from your
              monthly level. Keep going to your goal.
            </p>
            <button type="button" className="btn btn-light">
              More <i className="fa fa-chevron-right"></i>
            </button>
          </div>
          <div className="graph dash">
            <div className="dash">
              <h4>Weekly Activity</h4>
              <h6>
                <span>Sunday</span>,18 February 2022
              </h6>
            </div>
            <div className="row">
              <div className="col-sm-10">
                <div className="graph-pie">
                  <div className="box f-height">
                    <div className="box-body pt-20">
                      <WeeklyChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="project">
                  <div className="count1 text-center">
                    <h5>40+</h5>
                    <p>Project</p>
                  </div>
                  <div className="count1 text-center">
                    <h5>60+</h5>
                    <p>Tasks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Task">
            <div className="row">
              <div className="col-sm-6">
                <div className="dash">
                  <h4>Task</h4>
                  <h6>
                    <span>10 min</span> on this week
                  </h6>
                </div>
                <div className="task-list">
                  <div className="box-body pt-20">
                    <Task />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="dash">
                  <h4>Task List</h4>
                  <h6>
                    <span>February 5th</span>
                  </h6>
                </div>
                <ul className="task-list">
                  <li>
                    <img src={icon1} className="img-responsive" />
                    <div className="cmnt">
                      <h4>Dashboard Revamp</h4>
                      <p>
                        <span>10:00 Hope Project</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={icon2} className="img-responsive" />
                    <div className="cmnt">
                      <h4>Marketplace Design</h4>
                      <p>
                        <span>09:00 Dream Project </span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={icon3} className="img-responsive" />
                    <div className="cmnt">
                      <h4>Portfolio Design</h4>
                      <p>
                        <span>08:00 Core Project</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={icon1} className="img-responsive" />
                    <div className="cmnt">
                      <h4>App Design</h4>
                      <p>
                        <span>12:00 Client Project</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={icon1} className="img-responsive" />
                    <div className="cmnt">
                      <h4>Web Development</h4>
                      <p>
                        <span>12:00 Client Project</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="user-profile">
            <div className="history">
              <div className="dash">
                <h4>Page</h4>
                <h6>
                  <span className="text-primary">100%</span>Complete your Page
                </h6>
                </div>
                <div className="text-center">
                  <Donut />
                </div>
              
            </div>
            <div className="history ">
              <div className="dash">
                <h4>Recent Activity</h4>
                <button type="button" className="btn btn-light">
                  View All
                </button>
              </div>

              <div className="recent-activity">
                <h5>NFT Mobile App</h5>
                <Badge className="btn btn-success">Complete</Badge>
                <span>24/01/2022</span>
                <div className="perfo">
                  <BorderLinearProgress variant="determinate" value={100} />
                </div>
              </div>
              <div className="recent-activity">
                <h5>3D Icon Business</h5>
                <Badge className="btn btn-danger">In Process</Badge>
                <span>12/03/2022</span>
                <div className="perfo">
                  <BorderLinearProgress variant="determinate" value={ 30 } />
                </div>
              </div>
              <div className="recent-activity">
                <h5>Website Development</h5>
                <Badge className="btn btn-success">Complete</Badge>
                <span>15/05/2022</span>
                <div className="perfo">
                  <BorderLinearProgress variant="determinate" value={100} />
                </div>
              </div>
            </div>
            <div className="history">
              <div className="dash">
                <h4>Comment</h4>
                <h6>
                  You have <span className="text-warning">4 comment</span> on
                  project
                </h6>
              </div>
              <ul className="comment">
                <a href="">
                  <li>
                    <div className="d-inline-flex">
                      <div className="p-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="cmnt">
                        <h4>John Doe  </h4>
                        <p className="coment">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                </a>
                <a href="">
                  <li>
                    <div className="d-inline-flex">
                      <div className="p-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="cmnt">
                        <h4>John Doe  </h4>
                        <p className="coment">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                </a>

                <a href="">
                  <li>
                    <div className="d-inline-flex">
                      <div className="p-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="cmnt">
                        <h4>John Doe  </h4>
                        <p className="coment">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                </a>
                <a href="">
                  <li>
                    <div className="d-inline-flex">
                      <div className="p-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="cmnt">
                        <h4>John Doe  </h4>
                        <p className="coment">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div>
                    </div>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DashboardContent;
