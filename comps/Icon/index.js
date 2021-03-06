import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

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
    width='200px',
    link='',
    target=''
}) => {

    return <Cont>
        <Link href={link}>
            <a target={target}>
                <Image src={src} width={width}/>
            </a>
        </Link>
    </Cont>
}

export default Icon;