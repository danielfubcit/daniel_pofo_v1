import Head from 'next/head';
import styled from 'styled-components';
import React, {useState}  from 'react';
import NavBar from '@/comps/NavBar';
import TopTitle from '@/comps/TopTitle';
import Icon from '@/comps/Icon';
import Intro from '@/comps/Intro';
import Card from '@/comps/Card';

const HomeCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Poppins', sans-serif;

  .hero{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .cardSec{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

export default function Home() {
  return <HomeCont>
    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
          rel="stylesheet"
        />
      </Head>
    <NavBar/>
    <div className='hero'>
      <TopTitle/>
      <Icon/>
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
      src='/videoedit.png'/>
    </div>
  </HomeCont>
}