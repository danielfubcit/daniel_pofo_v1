import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 350px;
    background: #3F3F3F;
    border: 1px solid #8B8B8B;
    box-sizing: border-box;
    border-radius: 50px;
    color: #FFFFFF;
    text-align: center;
    font-size: 14px;
    position: relative;
    top:-120px;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    flex:1;
`

const MainTitle = styled.text`
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
`

const SubTitle = styled.text`
    font-size: 14px;
    color: #FFDF6C;
    margin-bottom: 20px;
`

const Bot = styled.div`
    display: flex;
    flex:3;
    flex-direction: column;
    width: 290px;
`

const ProjectCard = ({
    mainTitle="My Role",
    text="Within Metro Vancouver, 13,000 tonnes of perfectly ripe and edible food are disposed of each year.",
    text2="As a solution of the issue, Reshare is a grocey app that lets stores sell excess inventory at a discounted price.",
    text3="Grocery stores can upload photos of ingredients, and customer can schedules a pickup time for pick up the food.",
}) => {
    return <Cont>
        <Top>
            <MainTitle>{mainTitle}</MainTitle>
        </Top>
        <Bot>
            <SubTitle>{text}</SubTitle>
            <SubTitle>{text2}</SubTitle>
            <SubTitle>{text3}</SubTitle>
        </Bot>
    </Cont>
}

export default ProjectCard;