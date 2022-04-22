import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import circle1 from "../../images/users/circle1.png";

export const Chat = () => {
  return (
    <section className="content1">
      <div className="row">
        <div className="people-list col-sm-3">
          <div className="search pt-3">
            <input type="text" placeholder="search" />
            <i className="fa fa-search"></i>
          </div>
          <ul className="list">
            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">John Doe  </div>
                <div className="status122">
                  <FontAwesomeIcon className="online" icon={faCircle} /> online
                </div>
              </div>
            </li>

            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">Rohit Sisodiya</div>
                <div className="status122">
                  <i className="fa fa-circle offline"></i> left 7 mins ago
                </div>
              </div>
            </li>

            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">Kapil Jindal</div>
                <div className="status122">
                  <FontAwesomeIcon className="online" icon={faCircle} /> online
                </div>
              </div>
            </li>

            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">Priya</div>
                <div className="status122">
                  <FontAwesomeIcon className="online" icon={faCircle} /> online
                </div>
              </div>
            </li>

            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">Lucky</div>
                <div className="status122">
                  <FontAwesomeIcon className="online" icon={faCircle} /> online
                </div>
              </div>
            </li>

            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">Monika</div>
                <div className="status122">
                  <i className="fa fa-circle offline"></i> left 30 mins ago
                </div>
              </div>
            </li>

            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">Sumer</div>
                <div className="status122">
                  <i className="fa fa-circle offline"></i> left 10 hours ago
                </div>
              </div>
            </li>

            <li className="clearfix">
              <img src={circle1} alt="avatar" />
              <div className="about">
                <div className="name">Maheera</div>
                <div className="status122">
                  <FontAwesomeIcon className="online" icon={faCircle} /> online
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="chat col-sm-9">
          <div className="chat-header clearfix">
            <img src={circle1} alt="avatar" />

            <div className="chat-about">
              <div className="chat-with">Chat with John Doe  </div>
              <div className="chat-num-messages">already 1 902 messages</div>
            </div>
            <i className="fa fa-star"></i>
          </div>

          <div className="chat-history">
            <ul>
              <li className="clearfix">
                <div className="message-data align-right">
                  <span className="message-data-time">10:10 AM, Today</span>
                  &nbsp; &nbsp;
                  <span className="message-data-name">Priya</span>
                  <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                  Hi Amit, how are you?
                </div>
              </li>

              <li>
                <div className="message-data">
                  <span className="message-data-name">
                    <FontAwesomeIcon className="online" icon={faCircle} /> Amit
                  </span>
                  <span className="message-data-time">10:12 AM, Today</span>
                </div>
                <div className="message my-message">I am good.</div>
              </li>

              <li className="clearfix">
                <div className="message-data align-right">
                  <span className="message-data-time">10:14 AM, Today</span>
                  &nbsp; &nbsp;
                  <span className="message-data-name">Priya</span>
                  <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">
                  Ok, If you could master one technology this year, what would
                  it be?
                </div>
              </li>

              <li>
                <div className="message-data">
                  <span className="message-data-name">
                    <FontAwesomeIcon className="online" icon={faCircle} /> Amit
                  </span>
                  <span className="message-data-time">10:20 AM, Today</span>
                </div>
                <div className="message my-message">Python.</div>
              </li>

              <li>
                <div className="message-data">
                  <span className="message-data-name">
                    <FontAwesomeIcon className="online" icon={faCircle} /> Amit
                  </span>
                  <span className="message-data-time">10:31 AM, Today</span>
                </div>
                <FontAwesomeIcon className="online" icon={faCircle} />
                <i
                  className="fa fa-circle online"
                  style={{ color: "#aed2a6" }}
                ></i>
                <i
                  className="fa fa-circle online"
                  style={{ color: "#dae9da" }}
                ></i>
              </li>
            </ul>
          </div>
          <div className="chat-message clearfix">
            <textarea
              name="message-to-send"
              id="message-to-send"
              placeholder="Type your message"
              rows="3"
            ></textarea>
            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o"></i>
            <button>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
