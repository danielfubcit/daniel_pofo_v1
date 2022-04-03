import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;
    height: auto;
    color: #202020;

    @media (max-width:450px) {
        width:375px
    }
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 48px;
    text-align: center;

    @media (max-width:450px) {
        font-size: 24px;
    }
`

const Name = styled.text`
    font-style: italic;
`

const Title = styled.text``

const Bot = styled.div`
    font-size: 16px;
    margin-top: 20px;

    @media (max-width:450px) {
        font-size: 12px;
        width: 250px;
        word-wrap: break-word;
        text-align: center;
    }
`

const TopTitle = ({

}) => {

    return <Cont>
         <Top>
             <Name>DANIEL FU</Name>
             <Title>Front-End Developer</Title>
         </Top>
         <Bot>Able to create your own world via coding is a wonderful thing.</Bot>
    </Cont>
}

export default TopTitle;