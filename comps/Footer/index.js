import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Link from 'next/dist/client/link';

const Cont = styled.div`
    display: flex;

    @media (max-width:450px) {
        display: none;
    }
`;

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 170px;
    width: 100%;
    background-color: #FFDF6C;
    text-align: center;
    color: #202020;
    font-weight: bold;
`

const Title = styled.text`
    font-size: 24px;
    line-height: 36px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Subtitle = styled.text`
    font-size: 18px;
    line-height: 27px;
`

const IconSec = styled.div`
    display: flex;
    flex-direction: row;
    width: 220px;
    justify-content: space-between;
    margin-top: 20px;
`

const Footer = ({
    src='/github.png',
    width='40px',
}) => {
    return <Cont>
        <Background>
            <Link href='/'>
                <Title>Daniel Fu</Title>
            </Link>
            <Subtitle>Front-end Developer</Subtitle>
            <IconSec>
                <Icon src={src} width={width} link='https://github.com/danielfubcit' target='_blank'/>
                <Icon src='/linkedin.png' width={width} link='https://www.linkedin.com/in/danielfu-/' target='_blank'/>
                <Icon src='/youtube.png' width={width} link='https://www.youtube.com/c/DanielFuGaming' target='_blank'/>
                <Icon src="/email.png" width={width} link='mailto:danielfuyj@outlook.com' target='_blank'/>
            </IconSec>
            
        </Background>
    </Cont>
}

export default Footer;