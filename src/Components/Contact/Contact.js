import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <div class="site-heading text-center">
    <p className="mt-5">
      CONTACT <span> US </span>
    </p>

  </div>
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="contact shadow">
            <h4><i className="fa fa-whatsapp"  style={{width:'3rem', height:'4rem', fontSize:'2rem',}}></i><br/>PHONE: <br/><a href="#">333 333 3333</a></h4>
          </div>
        </div>
        <div className="col-md">
          <div className="contact shadow">
            <h4><i className="far fa-envelope"  style={{width:'3rem', height:'4rem', fontSize:'2rem',}}></i><br/>E-MAIL: <br/><a href="#">mail@example.com</a></h4>
          </div>
        </div>
        <div className="col-md">
          <div className="contact shadow">
            <h4><i className=" fa fa-address-card " style={{width:'3rem', height:'4rem', fontSize:'2rem',}}></i><br/>ADDRESS: <br/><a href="#">Italy</a></h4>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact