import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const Cont = styled.div`
    display: flex;
    justify-content: center;
    width: 130px;
    background-color: #707070;
    border-radius: 20px;
`;

const ButtonCont = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
`

const ButtonText = styled.text`
    
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
`

const Button = ({
    link = "mailto:danielfuyj@outlook.com",
    text = "Contact me",
    target = "_blank"
}) => {
    return <Link href={link}>
        <a target={target}>
            <Cont>
                <ButtonCont>
                    <ButtonText>{text}</ButtonText>
                </ButtonCont>
            </Cont>
        </a>
    </Link>
}

export default Button;

