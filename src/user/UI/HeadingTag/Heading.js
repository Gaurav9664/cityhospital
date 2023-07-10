import React from 'react';
import { Hed1, Hed2, Hed3, Hed4, Hed5, Hed6, Paragraph } from './heading.style';

function Heading({children, type }) {

    const checktype = () => {
        switch (type) {
            case 'h1':
                return Hed1;
            case 'h2':
                return Hed2;
            case 'h3':
                return Hed3;
            case 'h4':
                return Hed4;
            case 'h5':
                return Hed5;
            case 'h6':
                return Hed6;
            case 'p':
                return Paragraph;
            default:
                return Paragraph;
        }
    }

    const Headingtype = checktype();


    return (
        <Headingtype>{children}</Headingtype>
    );
}

export default Heading;