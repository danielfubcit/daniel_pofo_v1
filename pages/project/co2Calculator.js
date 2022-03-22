import Head from 'next/head';
import styled from 'styled-components';
import React, {useState, useRef}  from 'react';
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
import HeroImages from '@/comps/HeroImages';
import ProjectCard from '@/comps/ProjectCard'

const ProjectsCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Poppins', sans-serif;

  .cardSec{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }

`;

export default function CO2Projects() {

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

    <SecTitle title='Reshare App/Website' text='Sep 2021 - Dec 2021'/>

    <HeroImages/>

    <Intro 
    width='410px'
    title='Project Overview' 
    info='Reshare is a grocery app that lets grocery stores sell excess inventory at a discounted price, while helping lower-income individuals have access to quality ingredients.'
    info2='The Reshare website showcase the project process, team members, and marketing products.'
    info3='This app is developed by using React, Expo JS, Google Firebase, and Figma.'
    />

    <div className='cardSec'>
        <ProjectCard 
        text='Front-end Developer'
        text2='Map API testing and research on the app'
        text3='Using Next JS to Build Reshare’s website'
        />
        <ProjectCard mainTitle='Problem & Solution'/>
    </div>

    <Footer/>
  </ProjectsCont>
}