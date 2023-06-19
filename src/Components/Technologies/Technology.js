import { Col, Row } from "antd";
import React from "react";
import "./Technology.css";
import kotlin from '../../assets/kotlin.svg'
import javalogo from '../../assets/javalogo.svg'
 import swift from '../../assets/swift.svg'
 import node from '../../assets/node.svg'
 import flutterlogo from '../../assets/flutterlogo.svg'
 import adobe from '../../assets/adobe.svg'
import { Container } from "react-bootstrap";

const techImg = [
  {
    img: kotlin,
    text: "kotlin",
  },
  {
    img: javalogo,
    text: "java",
  },
  {
    img: swift,
    text: "swift",
  },
  {
    img: node,
    text: "node",
  },
  {
    img: flutterlogo,
    text: "flutter",
  },
  {
    img: adobe,
    text: "adobe",
  },
];
const Technology = () => {
  return (
    <>
      <Container>
        <div className="tech__portion">
          <div class="site-heading text-center">
            <p className="mt-5">
              OUR<span> TECHNOLOGIES </span>
            </p>
            <h4> We explore the dynamic landscape of web development</h4>
          </div>
          <Row className="mb-5">
            {techImg.map((item) => {
              return (
                <>
                  <Col xxl={4} xl={4} lg={4} md={4} sm={24} xs={24}>
                    <img src={item.img} />
                    <h4>{item.text}</h4>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Technology;



// import React from 'react'
// import './Technology.css'
// import kotlin from '../../assets/kotlin.svg'
// import javalogo from '../../assets/javalogo.svg'
// import swift from '../../assets/swift.svg'
// import node from '../../assets/node.svg'
// import flutterlogo from '../../assets/flutterlogo.svg'
// import adobe from '../../assets/adobe.svg'
// import { Container } from 'react-bootstrap'
// import { Col, Row } from 'antd'
// const Technology = () => {
//   return (
//     <>
//     <Container>
//     <div className="tech__portion">
//                <div class="site-heading text-center">
//                  <p className="mt-5">
//                    OUR  <span>  TECHNOLOGIES </span>
//                  </p>
//                  <h4>Lorem Ipsum is simply dummy text</h4>
//              </div>
//              </div>
//     <Row gutter={[12,12]}>
//     <Col xxl={4} xl={4} lg={4} md={4} sm={14} xs={14}>
//     <div class="hover05 column">
//     <div>
//     <figure><img src={kotlin} /></figure>
//     <span>Hover</span>
//   </div>
//     </div>
//     </Col>
//     <Col xxl={4} xl={4} lg={4} md={4} sm={14} xs={14}>
//     <div class="hover05 column">
//     <div>
//     <figure><img src={javalogo} /></figure>
//     <span>Hover</span>
//   </div>
//     </div>
//     </Col>
//     <Col xxl={4} xl={4} lg={4} md={4} sm={14} xs={14}>
//     <div class="hover05 column">
//     <div>
//     <figure><img src={swift} /></figure>
//     <span>Hover</span>
//   </div>
//     </div>
//     </Col>
//     <Col xxl={4} xl={4} lg={4} md={4} sm={14} xs={14}>
//     <div class="hover05 column">
//     <div>
//     <figure><img src={node} /></figure>
//     <span>Hover</span>
//   </div>
//     </div>
//     </Col>
//     <Col xxl={4} xl={4} lg={4} md={4} sm={14} xs={14}>
//     <div class="hover05 column">
//     <div>
//     <figure><img src={flutterlogo} /></figure>
//     <span>Hover</span>
//   </div>
//     </div>
//     </Col>
//     <Col xxl={4} xl={4} lg={4} md={4} sm={14} xs={14}>
//     <div class="hover05 column">
//     <div>
//     <figure><img src={adobe} /></figure>
//     <span>Hover</span>
//   </div>
//     </div>
//     </Col>
//     </Row>
//     </Container>
   
    
   
     
    
  
//     </>
//   )
// }

// export default Technology
