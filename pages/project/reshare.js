import Head from 'next/head';
import styled from 'styled-components';
import React, {useState, useRef}  from 'react';
import NavBar from '@/comps/NavBar';
import Block from '@/comps/Block';
import SecTitle from '@/comps/SecTitle';
import Footer from '@/comps/Footer';
import HeroImages from '@/comps/HeroImages';
import ProjectCard from '@/comps/ProjectCard'
import ProjectButton from '@/comps/ProjectButton';
import Icon from '@/comps/Icon';
import Footer2 from '@/comps/Footer2';

const ProjectsCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .margin{
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width:450px) {
      margin-top: 90px;
      margin-bottom: 15px;
    }
  }

  .viewsite{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .icon{
    display: flex;
    width:150px;
    justify-content: space-between;
  }

  .cardSec{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;

    @media (max-width:450px) {
      flex-wrap: wrap;
      gap:12px;
    }
  }

  .direction{
    margin-bottom: 50px;

    @media (max-width:450px) {
      margin-bottom: 20px;
    }
  }

`;

export default function ReshareProject() {

  return <ProjectsCont>
    <Head>
      <title>Daniel Fu | Front-End Developer | BCIT D3 Web Development 2022</title>
      <link rel="shortcut icon" href="/Daniel_with_laptop.png" />
    </Head>

    <NavBar/>
  
    <div className='margin'>
    <SecTitle title='Reshare Website & App' text='Sep 2021 - Dec 2021'/>
    </div>

    <div className='viewsite'>
        <div className='icon'>
            <Icon src='/link.png' width="35px" link='https://reshare-gold.vercel.app/' target='_blank'/>
            <Icon src='/github.png' width="35px" link='https://github.com/julianmayes/reshare-website' target='_blank'/>
            <Icon src='/figma.png' width="35px" link='https://www.figma.com/file/L8jpfrxxDNIxm1UkEePor3/reshare?node-id=1352%3A6675' target='_blank'/>
        </div>
    </div>

    <HeroImages/>

    <Block/>

    <div className='cardSec'>
        <ProjectCard 
        text='Front-end Developer'
        text2='Map API testing and research on the app'
        text3='Using Next JS to build Reshare’s website'
        />
        <ProjectCard 
        mainTitle='Project Overview'
        text='Reshare is a grocery app that lets grocery stores sell excess inventory at a discounted price, while helping lower-income individuals have access to quality ingredients.'
        text2='The Reshare website showcase the project process, team members, and marketing products.'
        text3='This app is developed by using React, Expo JS, Google Firebase, and Figma.'
        />
        <ProjectCard mainTitle='Problem &amp; Solution'/>
    </div>

    <div className='direction'>
      <ProjectButton 
      backText='Previous Project' 
      backLink='/project/cinemagic'/>
    </div>

    <Footer/>
    <Footer2/>
  </ProjectsCont>
}