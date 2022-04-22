import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

import contact from "../../images/support.png";

export const Support = () => {
  return (
    <section class="content">
      <div class="dash">
        <h4>Contact Us</h4>
      </div>
      <div class="row">
        <div class="col-sm-7">
          <form class="contact">
            <img src={contact} style={{ width: "100%" }} alt=""  />
            <div class="row">
              <div class="form-group mt-3 col-sm-6">
                <label for="First Name">First Name :</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div class="form-group mt-3 col-sm-6">
                <label for="Last Name">Last Name :</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div class="form-group mt-3 col-sm-6">
                <label for="Last Name">Enter Email :</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group mt-3 col-sm-6">
                <label for="Last Name">Phone Number :</label>
                <input type="no" class="form-control" placeholder="Enter No" />
              </div>
              <div class="form-group mt-3 col-sm-12">
                <label for="Last Name">Message :</label>
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  name="text"
                ></textarea>
              </div>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-warning mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="col-sm-5">
          <div class="contact">
            <ul>
              <li>
                <div class="email p-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h4 class="mt-3">
                    <b>Email</b>
                  </h4>
                  <p>info@boffincoders.com</p>
                </div>
              </li>
              <li>
                <div class="phone p-3">
                  <FontAwesomeIcon icon={faPhone} />
                  <h4 class="mt-3">
                    <b>Phone</b>
                  </h4>
                  <p>+91-95018-87900</p>
                </div>
              </li>
              <li>
                <div class="location p-3">
                  <FontAwesomeIcon icon={faLocation} />
                  <h4 class="mt-3">
                    <b>Address</b>
                  </h4>
                  <p>
                    Boffin Coders Private Limited, C-201,202, Industrial Area,
                    Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071
                  </p>
                </div>
              </li>
            </ul>
            <div class="dvv">

                <iframe title="My Daily Marathon Tracker" style={{ width: "100%", height: "50vh" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.989367889601!2d76.68358541543918!3d30.705688681646706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef5e6c569e1%3A0x23522f7586cacf39!2sBoffin%20Coders%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1648556013758!5m2!1sen!2sin"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
