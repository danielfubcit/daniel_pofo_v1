import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Arrow from '../Arrow';

const Cont = styled.div`
    display: flex;
    justify-content: center;
`;

const LeftButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 45vw;
`
const RightButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 45vw;
`
const LeftText = styled.text`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    margin-left: 20px;

    @media (max-width:450px) {
        font-size: 14px;
        margin-left: 10px;
    }
`

const RightText = styled.text`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    margin-right: 20px;

    @media (max-width:450px) {
        font-size: 14px;
        margin-right: 10px;
    }
`

const ProjectButton = ({
    backText="Home",
    backLink=`/`,
    nextLink=`/project/co2Calculator`,
    nextText="Next Project"
}) => {
    const r = useRouter (); 
    return <Cont>
        <LeftButton>
            <Arrow click={()=>{r.push(backLink)}}/>
            <LeftText>{backText}</LeftText>
        </LeftButton>
        <RightButton>
            <RightText>{nextText}</RightText>
            <Arrow src='/next.png' click={()=>r.push(nextLink)}/>
        </RightButton>
    </Cont>
}

export default ProjectButton;
