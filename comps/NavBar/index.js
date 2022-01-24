import React from 'react';
import styled from 'styled-components';

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
    margin-right: 20px;
`;

const Image = styled.img`
    width: 30px;
    height: auto;
    margin-right: 10px;
`
const NavBar = ({

}) => {

    return <Cont>
         <Left>
             <Title>Daniel Fu</Title>
         </Left>
         <Right>
            <Image src="/github.png"/>
            <Image src="/linkedin.png"/>
            <Image src="/youtube.png"/>
            <Image src="/email.png"/>
         </Right>
    </Cont>
}

export default NavBar;