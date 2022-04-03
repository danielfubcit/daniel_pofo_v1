import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width:450px) {
        margin-bottom: 10px;
    }
`;

const Image = styled.img`
    width: ${props=>props.width};
    height: auto;
`

const ImageUI = ({
    src='/Daniel_with_laptop.png',
    width='200px',
}) => {
    return <Cont>
        <Image src={src} width={width}/>
    </Cont>
}

export default ImageUI;