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
`

const RightText = styled.text`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
    text-align: center;
    margin-right: 20px;
`

const ProjectButton = ({
}) => {
    const r = useRouter (); 
    return <Cont>
        <LeftButton>
            <Arrow click={()=>r.push(`/`)}/>
            <LeftText>Home</LeftText>
        </LeftButton>
        <RightButton>
            <RightText>Next Project</RightText>
            <Arrow src='/next.png' click={()=>r.push(`/project/co2Calculator`)}/>
        </RightButton>
    </Cont>
}

export default ProjectButton;
