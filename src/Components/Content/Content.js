import React from "react";
import "./Content.css";
import bg from "../../assets/bg.jpg";
import bgicon from "../../assets/bgicon.webp";
import laptop from "../../assets/laptop.avif";

import {
  SketchOutlined,
  DesktopOutlined,
  RedditOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

const serviceArea = [
  {
    img: laptop,
    title: "Digital Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam eligendi reprehenderit natus quae! Optio quae repellat quasi, magnam inventore iusto fuga delectus minima labore alias necessitatibus quia error excepturi.",
    para: "Learn More",
  },
  {
    img: laptop,
    title: "Digital Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam eligendi reprehenderit natus quae! Optio quae repellat quasi, magnam inventore iusto fuga delectus minima labore alias necessitatibus quia error excepturi.",
    para: "Learn More",
  },
  {
    img: laptop,
    title: "Digital Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam eligendi reprehenderit natus quae! Optio quae repellat quasi, magnam inventore iusto fuga delectus minima labore alias necessitatibus quia error excepturi.",
    para: "Learn More",
  },
  {
    img: laptop,
    title: "Digital Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam eligendi reprehenderit natus quae! Optio quae repellat quasi, magnam inventore iusto fuga delectus minima labore alias necessitatibus quia error excepturi.",
    para: "Learn More",
  },
  {
    img: laptop,
    title: "Digital Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam eligendi reprehenderit natus quae! Optio quae repellat quasi, magnam inventore iusto fuga delectus minima labore alias necessitatibus quia error excepturi.",
    para: "Learn More",
  },
  {
    img: laptop,
    title: "Digital Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam eligendi reprehenderit natus quae! Optio quae repellat quasi, magnam inventore iusto fuga delectus minima labore alias necessitatibus quia error excepturi.",
    para: "Learn More",
    icon: DesktopOutlined,
  },
];

const Content = () => {
  return (
    <div style={{padding: "10px"}}>
    <div class="site-heading text-center">
    <h2>
      OUR<span> PORTFOLIO </span>
    </h2>
    <h4>Project Successfully Developed and Marketed</h4>
  </div>
      <Row gutter={[12,12]} >
        {serviceArea.map((item) => {
          return (
           
              <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                <div className="content-card">
                  <img
                    src={item.img}
                    alt=""
                  />
                  <div className="block__body">
                    <SketchOutlined className="icon-section" />
                    <h3 className="text-red">{item.title}</h3>
                    <p className="text-muted">{item.text}</p>
                    <a href="" className="btn btn--pill btn--translucent">
                      {item.para}
                    </a>
                  </div>
                </div>
              </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Content;
