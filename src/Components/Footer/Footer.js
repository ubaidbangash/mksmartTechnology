import React from "react";
import "./Footer.css";
import Wave from 'react-wavify'


const Footer = () => {
  return (
    <>
    <Wave fill='#ba3030'
    paused={false}
    options={{
      height: 80,
      amplitude: 20,
      speed: 0.15,
      points: 3
    }}
/>
    <footer

      id="Footer"
      style={{ background: "#1f1b36" }}
      className="page-footer font-small stylish-color-dark pt-4"
    >
      <div className="container text-center text-md-left ">
        <div className="row">
          <div className="col-md-4 mx-auto text-white">
            <h5 className="text-uppercase font-weight-bold  ">
              About our Company
            </h5>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px", color: "red", height: "5px" }}
            />
            <p style={{textAlign:'initial'}}>
            MK Smart Technology as your trusted partner and embark on a transformative 
            journey into the future of technology. Together, we can unlock the full potential
             of smart solutions and drive your success to new heights.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div
            id="link10"
            className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white text-align-justify"
            style={{ textAlign: "justify" }}
          >
            <h6 className="text-uppercase font-weight-bold ">Products</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px", color: "red" }}
            />
            <p>
              <a className="text-white" href="#!">
                Travelling
              </a>
            </p>
            <p>
              <a className="text-white" href="#!">
                About
              </a>
            </p>
            <p>
              <a className="text-white" href="#!">
                BrandFlow
              </a>
            </p>
            <p>
              <a className="text-white" href="#!">
                Services
              </a>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div
            id="link10"
            className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white "
            style={{ textAlign: "justify" }}
          >
            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px", color: "red" }}
            />
            <p>
              <a className="text-white" href="#!">
                Your Account
              </a>
            </p>
            
            <p>
              <a className="text-white" href="#!">
                Shipping Rates
              </a>
            </p>
            <p>
              <a className="text-white" href="#!">
                Help
              </a>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div
            className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white"
            style={{ textAlign: "justify" }}
          >
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px", color: "red", height: "5px" }}
            />
            <p>
              <i className="fas fa-home  "></i>New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope mr-4"></i>info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i>+ 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i>+ 01 234 567 89
            </p>
          </div>
        </div>
      </div>



      <div
        style={{ backgroundColor: "  #ec1c24;", color:'white;' }}
        className="footer-copyright text-center py-3 text-white"
      >
        Copyright© 2023: Design and Develop by MK Smart Technologies
      </div>
      
    </footer>
    </>
  );
};

export default Footer;
