import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: #FFDF6C;
`;

const BlockSec = styled.div`
    display: flex;
    flex-direction: column;
    width: 530px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 160px;

    @media (max-width:450px) {
        width: 350px;
        margin-bottom: 80px;
    }
`

const Block = ({
}) => {
    return <Cont>
        <BlockSec>
        </BlockSec>
    </Cont>
}

export default Block;