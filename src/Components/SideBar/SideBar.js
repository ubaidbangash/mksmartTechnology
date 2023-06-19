import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <>
      <h1></h1>

      <div className="block-social on_right">
        <ul>
          <li>
            <a
              className="facebook"
              target="_blank"
              href="https://www.facebook.com/mondelloperformance/"
            >
              <span>
                <i className="fa fa-address-card-o"></i>
                <span className="social-text">Contact Us</span>
              </span>
            </a>
          </li>
          <li>
            <a
              className="twitter"
              target="_blank"
              href="https://twitter.com/mondelloproduct"
            >
              <span>
                <i className="fa fa-linkedin text-primary" ></i>
                <span className="social-text">Follow on Linkedin</span>
              </span>
            </a>
          </li>
          <li>
            <a
              className="pinterest"
              target="_blank"
              href="https://wa.me/+923010991626"
            >
              <span>
                <i className="fa fa-whatsapp" style={{ color: "green" }}></i>
                <span className="social-text">Follow on Whapsapp</span>
              </span>
            </a>
          </li>
          <li>
            <a
              className="mail-to"
              target="_blank"
              href="mailto:lynn@mondellotwister.com"
            >
              <span>
                <i className="fa fa-envelope-o" style={{ color: "blue" }}></i>
                <span className="social-text">Email Us</span>
              </span>
            </a>
          </li>{" "}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
