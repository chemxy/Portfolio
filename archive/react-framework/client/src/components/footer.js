import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Footer extends React.Component {

    render(){
        return (
            <>
                <style>
                    {`
                    .footer{
                        background-color:white;
                        margin-top:100px
                        margin-bottom:0;
                    }
                `}
                </style>
                <Jumbotron className="footer">
                    <div class="container ">
                        <p class="font-weight-light">Contact Info</p>
    
                        <text class="font-weight-light">Email: chemxywork@gmail.com</text>
    
                        <text class="font-weight-light">Github: https://github.com/chemxy </text>
    
                        <text class="font-weight-light">Linkedin: https://www.linkedin.com/in/chemxy</text>
                    </div>
                </Jumbotron>
            </>
        );
    }
};

export default Footer;
