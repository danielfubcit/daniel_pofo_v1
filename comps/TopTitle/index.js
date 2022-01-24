import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: auto;
    color: #202020;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
`

const Name = styled.text`
    font-style: italic;
    font-size: 42px;
`

const Title = styled.text``

const Bot = styled.text`
    font-size: 16px;
    margin-top: 20px;
`

const TopTitle = ({

}) => {

    return <Cont>
         <Top>
             <Name>DANIEL FU</Name>
             <Title>Front-end Developer</Title>
         </Top>
         <Bot>I love to code cool looking stuff, and it is a wonderful thing.</Bot>
    </Cont>
}

export default TopTitle;