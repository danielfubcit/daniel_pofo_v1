import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const Cont = styled.div`
    display: flex;
    justify-content: center;
    width: 130px;
    background-color: #707070;
    border-radius: 20px;
    margin-top: 50px;
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
}) => {
    return <Cont>
        <Link href="mailto:danielfuyj@outlook.com">
            <ButtonCont>
                <ButtonText>Contact me</ButtonText>
            </ButtonCont>
        </Link>
    </Cont>
}

export default Button;

