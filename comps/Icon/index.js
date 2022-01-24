import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: ${props=>props.width};
    height: auto;
`

const Icon = ({
    src='/Daniel_with_laptop.png',
    width='170px'
}) => {

    return <Cont>
        <Image src={src} width={width}/>
    </Cont>
}

export default Icon;