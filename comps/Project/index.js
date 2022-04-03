import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Button from '../Button';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    color: #202020;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
    width: 72vw;

    @media (max-width:450px) {
        flex-wrap: wrap;
        height: 280px;
    }
`;

const Left = styled.div`
    display: flex;
    justify-content: center;
    width:350px;

    @media (max-width:450px) {
        width:auto;
    }
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    text-align: left;
    width: 400px;

    @media (max-width:450px) {
        height: auto;
        width:auto;
    }
`

const Title = styled.text`
    font-weight: bold;
    font-size: 24px;
    line-height: 44px;

    @media (max-width:450px) {
        font-size: 16px;
        line-height: 24px;
    }
`

const ButtonCont = styled.div`
    display:flex;
    justify-content: space-around;
    width:310px;
    margin-top: 10px;

    @media (max-width:450px) {
        justify-content: space-around;
        width:220px;
    }
`

const Project = ({
    title='Reshare Website & App',
    src,
    iconWidth="300px",
    target='_blank',
    link='https://reshare-gold.vercel.app/',
    projectlink='/project/reshare',
    butText='View Site'
}) => {
    return <Cont>
        <Left>
            <Icon src={src} width={iconWidth} link={link} target={target}/>
        </Left>
        <Right>
            <Title>{title}</Title>
            <ButtonCont>
                <Button text={butText} link={link}/>
                <Button text="View Project" link={projectlink} target=''/>
            </ButtonCont>
        </Right>
    </Cont>
}

export default Project;