import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ( { children, isGoogleSignIn, ...propertiYangLain} ) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
        {...propertiYangLain}
    >
        {children}
    </button>
);

export default CustomButton;