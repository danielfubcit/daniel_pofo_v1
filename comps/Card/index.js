import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    background: #3F3F3F;
    border: 1px solid #8B8B8B;
    box-sizing: border-box;
    border-radius: 50px;
    color: #FFFFFF;
    text-align: center;
    font-size: 14px;
    position: relative;
    top:-150px;
`;

const Top = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
`

const MainTitle = styled.text`
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;
`

const Bot = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    margin-bottom: 30px;
`

const MainText = styled.text`
    line-height: 24px;
    margin-bottom: 20px;
`

const SubTitle = styled.text`
    font-weight: bold;
    font-size: 16px;
    color: #FFDF6C;
    margin-bottom: 20px;
`

const SubText = styled.text`
    line-height: 24px;
`

const Card = ({
    mainTitle="Front-end Developer",
    mainText="Building Styled-components and applying them to websites or mobile apps is one of my favorite thing to do. Since I get full control of how the UI should look like.",
    subTitle="Programing languages I use:",
    subText1="HTML",
    subText2="CSS",
    subText3="JavaScript",
    subText4="React",
    subText5="React Native",
    src='/webdev.png'
}) => {
    return <Cont>
        <Top>
            <Icon src={src} width='50px'/>
        </Top>
        <MainTitle>{mainTitle}</MainTitle>
        <Bot>
            <MainText>{mainText}</MainText>
            <SubTitle>{subTitle}</SubTitle>
            <SubText>{subText1}</SubText>
            <SubText>{subText2}</SubText>
            <SubText>{subText3}</SubText>
            <SubText>{subText4}</SubText>
            <SubText>{subText5}</SubText>
        </Bot>
    </Cont>
}

export default Card;