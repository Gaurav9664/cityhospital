import React from 'react';
import { BasicLink } from './mylink.style';

function MyLink({ children }) {
    return (
        <BasicLink>
            {children}
        </BasicLink>
    );
}

export default MyLink;