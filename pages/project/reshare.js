import Head from 'next/head';
import styled from 'styled-components';
import React, {useState, useRef}  from 'react';
import NavBar from '@/comps/NavBar';
import Intro from '@/comps/Intro';
import SecTitle from '@/comps/SecTitle';
import Footer from '@/comps/Footer';
import HeroImages from '@/comps/HeroImages';
import ProjectCard from '@/comps/ProjectCard'
import ProjectButton from '@/comps/ProjectButton';
import Button from '@/comps/Button';

const ProjectsCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Poppins', sans-serif;

  .margin{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .viewsite{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .cardSec{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }

  .direction{
    margin-bottom: 50px;
  }

`;

export default function ReshareProject() {

  return <ProjectsCont>
    <Head>
      <title>Daniel Fu | Front-End Developer | BCIT D3 Web Development 2022</title>
      <link rel="shortcut icon" href="/Daniel_with_laptop.png" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
        rel="stylesheet"
      />
      </Head>

    <NavBar/>
  
    <div className='margin'>
    <SecTitle title='Reshare Website & App' text='Sep 2021 - Dec 2021'/>
    </div>

    <div className='viewsite'>
    <Button text='View Site' link='https://reshare-gold.vercel.app/'/>
    </div>

    <HeroImages/>

    <Intro 
    width='500px'
    title='Project Overview' 
    info='Reshare is a grocery app that lets grocery stores sell excess inventory at a discounted price, while helping lower-income individuals have access to quality ingredients.'
    info2='The Reshare website showcase the project process, team members, and marketing products.'
    info3='This app is developed by using React, Expo JS, Google Firebase, and Figma.'
    />

    <div className='cardSec'>
        <ProjectCard 
        text='Front-end Developer'
        text2='Map API testing and research on the app'
        text3='Using Next JS to build Reshare’s website'
        />
        <ProjectCard mainTitle='Problem & Solution'/>
    </div>

    <div className='direction'>
      <ProjectButton/>
    </div>

    <Footer/>
  </ProjectsCont>
}