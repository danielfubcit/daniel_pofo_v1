import Head from 'next/head';
import styled from 'styled-components';
import React, {useState, useRef, useEffect}  from 'react';
import NavBar from '@/comps/NavBar';
import TopTitle from '@/comps/TopTitle';
import ImageUI from '@/comps/ImageUI';
import Intro from '@/comps/Intro';
import Card from '@/comps/Card';
import SecTitle from '@/comps/SecTitle';
import Project from '@/comps/Project';
import Button from '@/comps/Button';
import Footer from '@/comps/Footer';
import Arrow from '@/comps/Arrow';
import Footer2 from '@/comps/Footer2';


const HomeCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .hero{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width:450px) {
      flex-direction: column-reverse;
      margin-top: 80px;
      margin-bottom: 30px;
    }
  }

  .cardSec{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;

    @media (max-width:450px) {
      flex-wrap: wrap;
      gap: 12px;
    }
  }

  .projects-sec{
    display: flex;
    flex-direction: row;
  }

  .projects{
    display: flex;
    flex: 5;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .arrow-left{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }

  .arrow-right{
    display: flex;
    align-items: center;
    flex: 1;
  }

  .contactSec{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;

    @media (max-width:450px) {
      margin-top: 70px;
      margin-bottom: 0px;
    }
  }

  .contactButton{
    margin-top: 30px;

    @media (max-width:450px) {
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }
`;

export default function Home() {

  const ref = useRef(null);
  const ref2 = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const scroll2 = (scrollOffset2) => {
    ref2.current.scrollLeft += scrollOffset2;
  };

  const breakpoints = (width) => {
    if(width < 450) {
      return 'mb';
    } else if(width >= 450) {
      return 'pc';
    } 
  };
  
  const [breakpoint, setBreakpoint] = useState(() => breakpoints(typeof window !== 'undefined' && (window.innerWidth)));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calcInnerWidth = function() {
        setBreakpoint(breakpoints(window.innerWidth))
      }
      window.addEventListener('resize', calcInnerWidth)
      return () => window.removeEventListener('resize', calcInnerWidth)
    }
  }, [])

  return (
  <HomeCont>
    <Head>
      <title>Daniel Fu | Front-End Developer | BCIT D3 Web Development 2022</title>
      <link rel="shortcut icon" href="/Daniel_with_laptop.png" />
    </Head>

    <NavBar/>

    <div className='hero'>
      <TopTitle/>
      <ImageUI/>
    </div>

    <Intro/>

    <div className='cardSec'>
      <Card/>
      <Card mainTitle='UX/UI Designer'
        mainText='Having a good user interface and user experience is important, and I always try my best to provide the best-looking user-friendly websites.'
        subTitle='Design tools I use:'
        subText1='Figma'
        subText2='WordPress'
        subText3='Photoshop'
        subText4='Illustrator'
        subText5='InDesign'
        src='/graphic-design.png'/>
      <Card mainTitle='Video Editor'
        mainText='Making videos is FUN. 6 years ago, I made my very first YouTube video. I currently have about 1k subscribers on my YouTube Channel, and I post gaming videos.'
        subTitle='Video editing tool I use:'
        subText1='Premiere Pro'
        subText2='After Effects'
        subText3='Audition'
        subText4='YouTube Studio'
        subText5=''
        src='/videoedit.png'
        width='70px'/>
    </div>

    <SecTitle/>

    <div className='projects-sec'>
      <div className='arrow-left'>
        <Arrow click={() => scroll(-(screen.width*0.73))}/>
      </div>
      <div className='projects' ref={ref}>
        <div>
        <Project link='https://cinemagic-coral.vercel.app/' 
          projectlink='/project/cinemagic' 
          butText="View App"
          src='/cinemagic_app.png' 
          iconWidth={breakpoint === "mb" ? "180px" : "300px"} 
          title='Cinemagic App'/>
        </div>
        <div>
        <Project 
          src='/reshareWeb.png' 
          iconWidth={breakpoint === "mb" ? "180px" : "300px"} 
        />
        </div>
        <div>
        <Project link='https://mdia-2109-final.vercel.app/' 
          projectlink='/project/co2Calculator' 
          butText="View App"
          src='/co2_app.png' 
          iconWidth={breakpoint === "mb" ? "180px" : "300px"}  
          title='CO2 Calculator App'/>
        </div>
      </div>
      <div className='arrow-right'>
        <Arrow src='/next.png' click={() => scroll((screen.width*0.73))}/>
      </div>
    </div>

    {/* <SecTitle title='UX/UI Design' text='Checkout my design projects down below.'/>

    <div className='projects-sec'>
      <div className='arrow-left'>
        <Arrow click={() => scroll2(-(screen.width*0.7))}/>
      </div>
      <div className='projects' ref={ref2}>
        <div>
        <Project link='https://www.figma.com/file/Y0Y5UdQI1J11WJ7S0rD9Hw/VanProtect?node-id=9%3A398' 
          projectlink='/project/vanProtect' 
          butText="View Site"
          src='/vanProtectMac.png' 
          width='300px' 
          title='VanProtect'/>
        </div>
        <div>
        <Project link='https://mdia-2109-final.vercel.app/' 
          projectlink='/project/co2Calculator' 
          butText="View App"
          src='/co2_app.png' 
          width='300px' 
          title='CO2 Calculator App'/>
        </div>
      </div>
      <div className='arrow-right'>
        <Arrow src='/next.png' click={() => scroll2((screen.width*0.7))}/>
      </div>
    </div> */}

    <div className='contactSec'>
      <SecTitle title='Want to get in touch?' text='It is a pleasure to have a chance to work with different people. I am always open to any opportunities.'/>
      <div className='contactButton'>
        <Button/>
      </div>
    </div>

    <Footer/>
    <Footer2/>
  </HomeCont>
  )
}