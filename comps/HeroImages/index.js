import React from 'react';
import styled from 'styled-components';
import Arrow from '../Arrow';
import {useRef}  from 'react';

const Cont = styled.div`
`;

const HeroImageCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Items = styled.div`
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;  
    width:100vw;  
`

const HeroImage = styled.img`
    height: 420px;
    object-fit: fill;

    @media (max-width:450px) {
        height: 260px;
    }
`

const ArrowCont = styled.div`
    display: flex;
    position: absolute;
    width: 90vw;
    height: 420px;
    justify-content: space-between;
    align-items: center;

    @media (max-width:450px) {
        height: 260px;
    }
`

const HeroImages = ({
    src1='/reshare1.png',
    src2='/reshare2.png',
    src3='/reshare3.png',
    src4='/reshare4.svg',
    src5='/reshare5.png',
}) => {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return <Cont>
        <HeroImageCont>
            <Items ref={ref}>
                <HeroImage src={src1}/>
                <HeroImage src={src2}/>
                <HeroImage src={src3}/>
                <HeroImage src={src4}/>
                <HeroImage src={src5}/>
            </Items>
            <ArrowCont>
                <Arrow click={() => scroll(-(screen.width*0.6))}/>
                <Arrow click={() => scroll((screen.width*0.6))} src='/next.png'/>
            </ArrowCont>
        </HeroImageCont>
    </Cont>
}

export default HeroImages;