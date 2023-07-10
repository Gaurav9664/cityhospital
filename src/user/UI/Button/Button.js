import React from 'react';
import { BaseButton, OutlineButton, PrimaryButton, SecondaryButton } from './button.style';

function Button({ children, type, btnDisbal=false }) {

    const buttonType = () => {
        switch (type) {
            case 'primary':
                return PrimaryButton;
            case 'secondary':
                return SecondaryButton;
            case 'outline':
                return OutlineButton;
            default:
                return PrimaryButton
        }
    }

    const CoustamButton = buttonType();

    return (
        <CoustamButton disabled={btnDisbal} >
            {children}
        </CoustamButton>
    );
}

export default Button;
