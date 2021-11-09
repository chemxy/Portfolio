import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

class Header extends React.Component {
    
    render(){
        return (
            <>
                <style>
                    {`
                    .header{
                        background-color:white;
                        margin-bottom:0;
                    }
                `}
                </style>
                <Jumbotron className="header">
                    <p>WELCOME!</p>
                </Jumbotron>
            </>
        );
    }
    
};

export default Header;
