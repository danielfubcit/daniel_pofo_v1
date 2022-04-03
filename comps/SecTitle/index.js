import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #202020;
`;

const Title = styled.text`
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;

    @media (max-width:450px) {
       font-size: 20px;
       line-height: 10px;
    }
`

const Text = styled.text`
    width: 500px;
    margin-top: 20px;
    font-size: 16px;
    line-height: 27px;

    @media (max-width:450px) {
       font-size: 12px;
       width: 350px;
    }
`

const SecTitle = ({
    title='Recent Work',
    text='Checkout my web/app projects down below.'
}) => {
    return <Cont>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </Cont>
}

export default SecTitle;