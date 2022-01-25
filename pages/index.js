import Head from 'next/head';
import styled from 'styled-components';
import React, {useState}  from 'react';
import NavBar from '@/comps/NavBar';
import TopTitle from '@/comps/TopTitle';
import ImageUI from '@/comps/ImageUI';
import Intro from '@/comps/Intro';
import Card from '@/comps/Card';
import SecTitle from '@/comps/SecTitle';
import Project from '@/comps/Project';
import Button from '@/comps/Button';
import Footer from '@/comps/Footer';

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

  .contactSec{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 80px;
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
    <Project src='/reshareWeb.png' width='300px'/>
    <Project link='https://mdia-2109-final.vercel.app/' src='/co2_app.png' width='300px' title='CO2 Calculator App' text1='The CO2Calculator app is an application designed to inform and educate users of carbon emissions, its effects on the environment, as well as ways to reduce the amount of carbon emissions produced by the user by providing them with tips and suggestions based on their determined emission rate.' text2=''/>
    <SecTitle title='Want to get in touch?' text='It is a pleasure to have a chance to work with different people. I am always open to any opportunities.'/>
    <div className='contactSec'>
      <Button/>
    </div>
    <Footer/>
  </HomeCont>
}