import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Heading from './heading';

class Project extends React.Component {
    render() {
        return (
            <Container className="border border-dark project">
                <h3 className="text-capitalize">{this.props.tittle}</h3>
                <h5 className=" text-capitalize font-weight-normal font-italic">{this.props.type}, {this.props.time}</h5>
                <p className="text-left">
                    {this.props.description}
                </p>
                <hr />
            </Container>
        )
    }
};

//TODO: use List and keys to list all projects
const projects = []

class Projects extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }

    componentDidMount() {
        document.title = "Project Experience";
    }

    render() {
        return (
            <>
                <style>
                    {`
                        .project{
                            background-color: white;
                            margin-bottom:40px;
                            padding:30px}
                    `}
                </style>
                <Container>
                    <Col fluid>
                        <Heading content="project experience" />

                        <Project tittle="personal website" type="personal project" time="2020"
                            description=" Designed and built a personal website that contains the general profile, projects,
                                work experience and contact
                                information.
                                Developed and implemented using web technologies including HTML and
                                CSS/bootstrap 4 for front-end designs,
                                and ExpressJS and NodeJS for back-end supports.
                                AngularJS to be added to support more
                                user interactions." />

                        <Project tittle="MazeRunner" type="personal project" time="2020"
                            description="  A Python game that requires the player to find a path to the exit and 
                                avoid enemies along the way. Implemented AI
                                agents to simulate players and enemies to make decisions. Utilized the game with Python
                                classNamees such as pygame, time and
                                random for the game engine and rendering of pictures and animations." />

                        <Project tittle="Data Mining: A Predictor for Heart Disease" type="Course project  - SENG474" time="2019"
                            description="A program written in Python that predicts the likelihood of having heart disease based
                                on the analysis of patient
                                statistics. Implemented with logistic regression classNameification model and decision tree
                                classNameification model.
                                Pre-processed the raw data using data normalization and visualized the data using
                                boxplot." />

                        <Project tittle="Requirements Engineering" type="Course project  - SENG321" time="2019"
                            description=" Experienced Agile development process. As client, designed 
                            a proposal (RFP) for Warrantied Product Tracking System. As
                            designer, designed a solution report for Disaster Continuity Planning System. Main
                            development processes include
                            information gathering, requirements (RD), specifications (RSD), use cases, UML diagrams,
                            low-high fidelity prototypes."  />

                        <Project tittle="Software Architecture Analysis" type="Course Project - SENG480A" time="2019"
                            description="  Analyzed and documented the architecture of ClusterFuzz, 
                            an open-source application developed by Google. 
                            Main technologies include identifying possible stakeholders and business goals, 
                            privacy and ethics report, architecturally
                            significant requirements, module views, code quality and technical debt report." />
                    </Col>
                </Container>
            </>
        );
    }
};

export default Projects;