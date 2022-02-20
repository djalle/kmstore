import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...propLainnya }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...propLainnya} />
        );
    };
    return Spinner;
};

export default WithSpinner;
    
