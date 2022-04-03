import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const Cont = styled.div`
    display: flex;
`;

const Background = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: #FFDF6C;
    text-align: center;
    color: #202020;
`

const Title = styled.text`
    font-size: 14px;
`

const Section = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`

const Footer2 = ({
}) => {
    return <Cont>
        <Background>
            <Link href='/terms_of_use'>
                <Title>Terms of Use</Title>
            </Link>
            <Section>|</Section>
            <Link href='/privacy_policy'>
                <Title>Privacy Policy</Title>
            </Link>
        </Background>
    </Cont>
}

export default Footer2;