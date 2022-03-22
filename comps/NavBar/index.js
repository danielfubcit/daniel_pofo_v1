import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Link from 'next/dist/client/link';

const Cont = styled.div`
    display: flex;
    align-items: center;
    background: #FFDF6C;
    border-radius: 0px 0px 50px 50px;
    padding: 8px 0px;
`;

const Left = styled.div`
    display: flex;
    flex:1;
    margin-left: 30px;
`;

const Title = styled.text`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #202020;
`;

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    flex:1;
    margin-right: 30px;
`;

const IconSec = styled.div`
    display: flex;
    flex-direction: row;
    width: 180px;
    justify-content: space-between;
`

const NavBar = ({
    src='/github.png',
    width='35px'
}) => {
    return <Cont>
         <Left>
            <Link href='/'>
                <Title>Daniel Fu</Title>
            </Link>
         </Left>
         <Right>
            <IconSec>
                <Icon src={src} width={width} link='https://github.com/danielfubcit' target='_blank'/>
                <Icon src='/linkedin.png' width={width} link='https://www.linkedin.com/in/danielfu-/' target='_blank'/>
                <Icon src='/youtube.png' width={width} link='https://www.youtube.com/c/DanielFuGaming' target='_blank'/>
                <Icon src="/email.png" width={width} link='mailto:danielfuyj@outlook.com' target='_blank'/>
            </IconSec>
         </Right>
    </Cont>
}

export default NavBar;