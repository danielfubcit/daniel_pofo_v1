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
`;

const Left = styled.div`
    display: flex;
    justify-content: center;
    width:350px;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    text-align: left;
    width: 400px;
`

const Title = styled.text`
    font-weight: bold;
    font-size: 24px;
    line-height: 44px;
`

const ButtonCont = styled.div`
    display:flex;
    justify-content: space-around;
    width:310px;
    margin-top: 10px;
`

const Project = ({
    title='Reshare Website & App',
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
            <ButtonCont>
                <Button text="View Site" link={link}/>
                <Button text="View Project" link='project/reshare' target=''/>
            </ButtonCont>
        </Right>
    </Cont>
}

export default Project;