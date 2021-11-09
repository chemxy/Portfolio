import React from 'react';

class Heading extends React.Component {

    render() {
        return (
            <>
                <style>
                    {`
                    .heading{
                        margin-top:50px;
                        margin-bottom: 25px;
                    }
                `}
                </style>
                <p className="heading text-center">
                    <h2 className="text-uppercase">{this.props.content}</h2>
                </p>
            </>
        );
    }
};

export default Heading;
