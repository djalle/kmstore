import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ( { children, isGoogleSignIn, inverted, ...propertiYangLain} ) => (
    <button className=
        {`
            ${inverted ? 'inverted' : ''}
            ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button
        `} 
        {...propertiYangLain}
    >
        {children}
    </button>
);

export default CustomButton;