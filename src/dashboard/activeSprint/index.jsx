import React from "react";
import circle1 from "../../images/users/circle1.png";
import circle2 from "../../images/users/circle2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faShare,
  faStar,
  faHistory
} from "@fortawesome/free-solid-svg-icons";

const ActiveSprint = () => {
  return (
    <div>
      <section className="content">
        <div className="dash">
          <h4>Sprint-00</h4>
        </div>
        <div className="recenty-update">
          <div className=" col-sm-8 search-task">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
                name="email"
              />
              <button className="input-group-text" type="submit">
                Submit
              </button>
              <img src={circle1} />
              <img src={circle2} />

            </div>
          </div>
          <div className="d-flex flex-row-reverse pb-3">
            <button type="text">
            <FontAwesomeIcon icon={faStar}/>
            </button>
            <button type="text">
             <FontAwesomeIcon icon={faShare}/>
            </button>
            <button type="text">
              <FontAwesomeIcon icon={faCloud}/>
            </button>
            <button type="text">
              <FontAwesomeIcon icon={faHistory}>14 days remaining</FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="dash">
              <h4>To Do</h4>
            </div>
            <div className="task-list">
              <div className="team-work">
                <h5>Task-01</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-2</div>
                <i className="ti-check-box"></i>
                <i className="ti-upload"></i>
              </div>
              <div className="team-work">
                <h5>Task-00</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-1</div>
                <i className="ti-check-box"></i>
                <i className="ti-upload"></i>
              </div>
              <div className="team-work">
                <h5>Report-00</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-3</div>
                <i className="ti-check-box"></i>
                <i className="ti-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dash">
              <h4>In Process</h4>
            </div>
            <div className="task-list">
              <div className="team-work">
                <h5>Task-01</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-2</div>
                <i className="ti-check-box"></i>
                <i className="ti-upload"></i>
              </div>
              <div className="team-work">
                <h5>Task-00</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-1</div>
                <i className="ti-check-box"></i>
                <i className="ti-upload"></i>
              </div>
              <div className="team-work">
                <h5>Report-00</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-3</div>
                <i className="ti-check-box"></i>
                <i className="ti-bookmark"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dash">
              <h4>Done</h4>
            </div>
            <div className="task-list">
              <div className="team-work">
                <h5>Task-01</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-2</div>
                <i className="ti-check-box"></i>
                <i className="ti-upload"></i>
              </div>
              <div className="team-work">
                <h5>Task-00</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-1</div>
                <i className="ti-check-box"></i>
                <i className="ti-upload"></i>
              </div>
              <div className="team-work">
                <h5>Report-00</h5>
                <badge>EPIC-00</badge>
                <div className="d-flex flex-row-reverse">NPO-3</div>
                <i className="ti-check-box"></i>
                <i className="ti-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActiveSprint;
