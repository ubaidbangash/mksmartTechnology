import React from 'react'
import './Portfolio.css'
import { Row, Col } from "antd";
import { Card } from "antd";
import premium from '../../assets/premium.jpeg'
const cardData = [
    {
      img: premium,
      text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    },
    {
      img: premium,
      text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    },
    {
      img: premium,
      text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    },
    {
      img: premium,
      text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    },
    {
      img: premium,
      text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    },
    {
      img: premium,
      text: "Some quick example text to build on the card title and make up the bulk of the card content.",
    },
  ];

const Portfolio = () => {
    const { Meta } = Card;
  return (
    <>
   
    <div className='portfolio-card'>
    <Row gutter={[24]} className="mt-5 d-flex justify-content-center ">
    
    {cardData.map((item) => {
      return (
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
        <div className='portfolio__hover'>
          <Card
            hoverable
            style={{ width: 400, paddingTop:'3rem'}}
            cover={
              <img
                alt="example"
                src={item.img}
                style={{ width: "200px" }}
              />
            }
          >
            <p>{item.text}</p>
            <Meta title="" description="card link" />
          </Card>
          </div>
        </Col>
      );
    })}
  </Row>
    </div>
    </>
  )
}

export default Portfolio