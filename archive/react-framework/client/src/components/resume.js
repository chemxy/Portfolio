import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Heading from './heading';

class Work extends React.Component {
    render() {
        return (
            <Container className="border border-dark work">
                <h3 className="text-capitalize">{this.props.tittle}</h3>
                <h5 className=" text-uppercase font-weight-normal font-italic">{this.props.company}</h5>
                <h5 className="text-capitalize font-weight-normal font-italic">{this.props.location}</h5>
                <h6 className="font-weight-normal">{this.props.duration}</h6>
                <p className="text-left">
                    {this.props.description}
                </p>
                <hr />
            </Container>
        )
    }
};

class Resume extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { date: new Date() };
    // }

    componentDidMount() {
        document.title = "Work Experience";
    }

    render() {
        return (
            <>
                <style>
                    {`
                        .work{
                            background-color: white;
                            margin-bottom:40px;
                            padding:30px}
                    `}
                </style>
                <Container>
                    <Row>

                        <Col fluid>
                            <Heading content="Work experience" />

                            <Work tittle="Software develoepr (Co-op)" company="insurance corporation of british columbia (icbc)"
                                location="Victoria, BC, Canada" duration="Jan 2021 - Dec 2021"
                                description=" To be continued.
                            " />

                            <Work tittle="Product Designer and Developer (Co-Op)" company="FROMASTERA design ltd"
                                location=" Vancouver, BC, Canada" duration="Sep 2020 - Dec 2020"
                                description=" Designed and implemented hardware products related to embedded systems such as full electronic circuits.
                            Developed and implemented relevant software products such as control systems and bluetooth support applications.
                            Main technologies and programming languages used are C, JavaScript, XML and Kotlin.
                            " />

                            <Work tittle="Software Developer (Co-Op)" company="LIJIN TECHNOLOGY DEVELOPMENT CO., LTD"
                                location="China" duration="May 2020 – Aug 2020"
                                description=" Designed and developed a web-based Wechat mini-program from scratch and connected it to the Wechat cloud database.
                            Main technologies used are Wechat developer tools, WXML, WXSS, JSON and JavaScript.                            
                            " />

                        </Col>
                      
                    </Row>
                </Container>

            </>
        );
    };

};
export default Resume;