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
`

const Text = styled.text`
    width: 500px;
    margin-top: 20px;
    font-size: 16px;
    line-height: 27px;
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