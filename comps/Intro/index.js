import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: #FFDF6C;
`;

const IntroSec = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props=>props.width};
    text-align: center;
    margin-top: 40px;
    margin-bottom: 180px;
`

const Title = styled.text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`

const Text = styled.text`
    font-size: 16px;
    line-height: 24px;
`

const Intro = ({
    title="Hello, I am Daniel. Great to see you here.",
    info="I am a front-end developer and am experienced in UX design. I graduated from BCIT D3 Program. Eager and motivated to apply my expertise in building responsive, elegant, and engaging-friendly web applications. Work in JavaScript, Node.js or frameworks such as React and skilled in UI Development technologies such as HTML, CSS, JSON and API usage.",
    info2='',
    info3='',
    width="530px"
}) => {
    return <Cont>
        <IntroSec width={width}>
            <Title>{title}</Title>
            <Text>{info}</Text>
            <Text>{info2}</Text>
            <Text>{info3}</Text>
        </IntroSec>
    </Cont>
}

export default Intro;