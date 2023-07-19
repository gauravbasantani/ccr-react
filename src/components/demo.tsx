import React from 'react';

import Ellipse1Image from 'src/assets/images/Desktop1_Ellipse_1.png';

import Ellipse2Image from 'src/assets/images/Desktop1_Ellipse_2.png';

import VectorImage from 'src/assets/images/Desktop1_Vector.png';

import {
    styled
} from '@mui/material/styles';

const Desktop11: any = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1440px`,
    height: `1024px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});

const Ellipse1: any = styled("img")({
    height: `100px`,
    width: `100px`,
    position: `absolute`,
    left: `1267px`,
    top: `52px`,
});

const Line1: any = styled("div")({
    border: `1px solid rgba(0, 0, 0, 1)`,
    width: `1440px`,
    height: `0px`,
    position: `absolute`,
    left: `0px`,
    top: `181px`,
});

const Ellipse2: any = styled("img")({
    height: `100px`,
    width: `648px`,
    position: `absolute`,
    left: `-164px`,
    top: `41px`,
});

const WelcomeUser: any = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `30px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `286px`,
    height: `22px`,
    position: `absolute`,
    left: `80px`,
    top: `80px`,
});

const Vector: any = styled("img")({
    height: `51px`,
    width: `59px`,
    position: `absolute`,
    left: `1287px`,
    top: `77px`,
});

function Desktop1(): JSX.Element {
    return (
        <Desktop11>
            <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse 1"}/>
            <Line1>
            </Line1>
            <Ellipse2 src={Ellipse2Image} loading='lazy' alt={"Ellipse 2"}/>
            <WelcomeUser>
                {`Welcome User`}
            </WelcomeUser>
            <Vector src={VectorImage} loading='lazy' alt={"Vector"}/>
        </Desktop11>);
    }

export default Desktop1;
    