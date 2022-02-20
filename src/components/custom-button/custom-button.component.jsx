import React from 'react';
import './custom-button.styles.scss';
// import {CustomButtonContainer} from './custom-button.styles'

// const CustomButton = ( {children, ...props} ) => (
//     <CustomButtonContainer {...props}> {children} </CustomButtonContainer>
// );

// =================== SEBELUM PAKE STYLED COMPONENT ==============================================

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