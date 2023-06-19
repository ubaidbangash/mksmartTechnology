import React from "react";
import "./Card.css";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.jpg";
import portfolio6 from "../../assets/portfolio6.jpg";

import { Col, Container, Row } from "antd";

const cardData = [
  {
    img: portfolio1,
    title: "Hello there!",
    text: "Trust yourself and keep going.",
  },
  {
    img: portfolio2,
    title: "Hello there!",
    text: "Trust yourself and keep going.",
  },
  {
    img: portfolio3,
    title: "Hello there!",
    text: "Trust yourself and keep going.",
  },
  {
    img: portfolio4,
    title: "Hello there!",
    text: "Trust yourself and keep going.",
  },
  {
    img: portfolio5,
    title: "Hello there!",
    text: "Trust yourself and keep going.",
  },
  {
    img: portfolio6,
    title: "Hello there!",
    text: "Trust yourself and keep going.",
  },
];
const Card = () => {
  return (
   
      <Row gutter={[24, 24]}>
        {cardData.map((item) => {
          return (
            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="card">
                <div className="slide slide1">
                  <div className="content">
                    <img src={item.img} />
                  </div>
                </div>

                <div className="slide slide2">
                  <div className="content">
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    
  );
};

export default Card;
