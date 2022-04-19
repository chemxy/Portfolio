//file: src/webpages/home.js
import React, { useEffect } from 'react';
import Selfie from './selfie';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Heading from './heading';

class Home extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }

    componentDidMount() {
        document.title = "Profile";
    }

    render() {

        return (
            <>
                <style>
                    {`
                        .main-container{
                            margin-top:100px; 
                            padding-bottom:100px;
                        }
                        .image-container{
                            padding-top:30px;
                        }
                        .about-me{
                            margin-top:30px;
                        }
                   `}
                </style>
                <Container fluid="md" className="main-container">
                    <Row>
                        <Col fluid>
                            <Container className="image-container">
                                <Selfie />
                            </Container>
                        </Col>
                        <Col fliud>
                            <Row>
                                <Container className="about-me">
                                    <Heading content="about me" />
                                    <p className="text-left font-weight-light">Independent, self-organized 4th-year Software Engineering student who
                                        likes new technology and challenges. Participated in many className projects with great
                                        contribution. Proven project leader, having led multiple className projects to completion.
                                        Active member of UN Volunteer. Active volunteer in VI ASHRAE projects. Have several personal
                                        projects experience. Previous work experience in developing mini-programs on Wechat. Love table
                                        tennis, guitar, cooking and photographing.
                                    </p>
                                </Container>
                            </Row>
                            <Row>
                                <Container className="text-left technical-skills">
                                    <Heading content="technical skills" />
                                    <p className="skill-set font-weight-light">
                                        <h5><b>Web & Database technologies:</b></h5>
                                        <text>AngularJS, JavaScript, Bootstrap 4, HTML/CSS, NodeJS, ExpressJS, SQL and Mongodb.</text>
                                    </p>
                                    <p className="skill-set font-weight-light">
                                        <h5><b>Programming Languages:</b></h5>
                                        <text>Python, Java, C and C++.</text>
                                    </p>
                                    <p className="skill-set font-weight-light">
                                        <h5><b>Development Tools:</b></h5>
                                        <text>Github, MS Office Suite, Matlab, InVision, Adobe XD and Virtual Machines.</text>
                                    </p>
                                </Container>
                            </Row>
                            
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}
export default Home;