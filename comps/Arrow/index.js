import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;

const ArrowImage = styled.img`
    width: ${props=>props.width};
    height: auto;;

    @media (max-width:450px) {
        width: 30px;
    }
`

const Arrow = ({
    src='/previous.png',
    width='40px',
    click = () => {}
}) => {
    return <Cont>
        <ArrowImage onClick={click} src={src} width={width}/>
    </Cont>
}

export default Arrow;
