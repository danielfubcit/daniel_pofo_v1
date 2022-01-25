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
    width: 560px;
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
}) => {
    return <Cont>
        <IntroSec>
            <Title>Hello, I am Daniel. Great to see you here.</Title>
            <Text>
                I am a web developer and I have been studying for a diploma in web development, UX/UI research, and web design at BCIT for more than 1 year. I have a full understanding of Adobe Creative Suite like illustrator photoshop, and premiere pro and am also proficient in prototyping tools such as Figma. I am a flexible, patient, and helpful person.
            </Text>
        </IntroSec>
    </Cont>
}

export default Intro;