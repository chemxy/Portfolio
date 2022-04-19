import React from 'react';
import img1 from './images/img1.JPG'; 
import Image from 'react-bootstrap/Image'

function Selfie() {
    // Import result is the URL of your image
    return (
        <>
            <style>
                {`
                    .selfie{
                        width:480px;
                        height:720px; 
                    }
        
                `}
            </style>
            <Image className="selfie" src={img1} alt="image not loaded" />
        </>
    )
};

export default Selfie;