import React from "react";
import "./Client.css";
import { Col, Row } from "antd";
import employe1 from "../../assets/employe1.jpg"
import { Container } from "react-bootstrap";

const clientData = [
    {
        title: 'Alina Smith',
        text: 'Senior UX/UI Designer',
        value: '342',
        post: 'Posts',
        follow: 'followers',
        para: '285',
        state: 'following',
        followers: 'Follow',
        message: 'Message'
    },
    {
        title: 'Alina Smith',
        text: 'Senior UX/UI Designer',
        value: '342',
        post: 'Posts',
        num: '120k',
        follow: 'followers',
        para: '285',
        state: 'following',
        followers: 'Follow',
        message: 'Message'
    },
    {
        title: 'Alina Smith',
        text: 'Senior UX/UI Designer',
        value: '342',
        post: 'Posts',
        num: '120k',
        follow: 'followers',
        para: '285',
        state: 'following',
        followers: 'Follow',
        message: 'Message'

    },
    {
        title: 'Alina Smith',
        text: 'Senior UX/UI Designer',
        value: '342',
        post: 'Posts',
        num: '120k',
        follow: 'followers',
        para: '285',
        state: 'following',
        followers: 'Follow',
        message: 'Message'
    },
    {
        title: 'Alina Smith',
        text: 'Senior UX/UI Designer',
        value: '342',
        post: 'Posts',
        num: '120k',
        follow: 'followers',
        para: '285',
        state: 'following',
        followers: 'Follow',
        message: 'Message'
    },
    {
        title: 'Alina Smith',
        text: 'Senior UX/UI Designer',
        value: '342',
        post: 'Posts',
        num: '120k',
        follow: 'followers',
        para: '285',
        state: 'following',
        followers: 'Follow',
        message: 'Message'
    },
];
const Slider = () => {
    return (
        <Container>
        
        <Row gutter={[24,24]}>
            {
                clientData.map((item) => {
                    return (
                        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                            <div>
                                <div className="card">
                                    <div className="pb">
                                    <img src={employe1}/>
                                    </div>
                                    <div className="info">
                                        <h1>{item.title}</h1>
                                        <h2>{item.text}</h2>
                                    </div>
                                    <div className="detail">
                                        <div className="page">
                                            <h3>{item.value}</h3>
                                            <h2>{item.post}</h2>
                                        </div>
                                        <div className="page">
                                            <h3>{item.num}</h3>
                                            <h2>{item.follow}</h2>
                                        </div>
                                        <div className="page">
                                            <h3>{item.para}</h3>
                                            <h2>{item.state}</h2>
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <button id="follow">{item.followers}</button>
                                        <button id="message">{item.message}</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
        </Container>
    );
};
export default Slider;
