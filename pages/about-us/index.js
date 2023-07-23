import React from 'react';
import {styled, Typography} from "@mui/material";

const AboutUs = () => {
    return (
        <>
            <TypographyStyled variant={"subtitle1"}>AboutUs</TypographyStyled>
        </>
    );
};

export default AboutUs;

const TypographyStyled = styled(Typography)`
font-size: 100px;
`
