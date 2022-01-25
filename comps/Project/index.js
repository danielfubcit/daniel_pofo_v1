import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    color: #202020;
    align-items: center;
    justify-content: space-evenly;
`;

const Left = styled.div``

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:450px;
    height: 400px;
    text-align: left;
`

const Title = styled.text`
    font-weight: bold;
    font-size: 24px;
    line-height: 44px;
`

const Text = styled.text`
    margin-top: 20px;
    font-size: 14px;
    line-height: 24px;
`

const Project = ({
    title='Reshare’s CMS Website',
    text1='Reshare is a grocery app that lets grocery stores sell excess inventory at a discounted price, while helping lower-income individuals have access to quality ingredients.',
    text2='The Reshare website showcase the project process, team members, and marketing products.',
    src,
    width,
    target='_blank',
    link='https://reshare-gold.vercel.app/'
}) => {
    return <Cont>
        <Left>
            <Icon src={src} width={width} link={link} target={target}/>
        </Left>
        <Right>
            <Title>{title}</Title>
            <Text>{text1}</Text>
            <Text>{text2}</Text>
        </Right>
    </Cont>
}

export default Project;