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
    <SecTitle title='CO2 Calculator App' text='Jan 2021 - May 2021'/>
    </div>

    <div className='viewsite'>
    <Button text='View App' link='https://mdia-2109-final.vercel.app/'/>
    </div>

    <HeroImages
      src1='/co2cal1.png'
      src2='/co2cal3.png'
      src3='/co2cal4.png'
      src4='/co2cal2.png'
      src5=''
    />

    <Intro 
    width='500px'
    title='Project Overview' 
    info='The CO2Calculator app is an application designed to inform and educate users of carbon emissions, its effects on the environment, as well as ways to reduce the amount of carbon emissions produced by the user by providing them with tips and suggestions based on their determined emission rate.'
    info2='This app is developed by using React, Next JS, and Figma.'
    info3=''
    />

    <div className='cardSec'>
        <ProjectCard 
        text='Project Leader & Front-end Developer'
        text2='Building styled-components and using Next JS to build the app'
        text3='UX/UI design on Figma'
        />
        <ProjectCard mainTitle='Problem & Solution'
        text="Carbon dioxide emissions are the primary driver of global climate change."
        text2="These emissions are expelled from vehicles, and collectively cars and trucks account for nearly one-fifth of all Canada emissions."
        text3='This app recognize the ways that cars have contributed to carbon emissions and what this means for every driver.'
        />
    </div>

    <div className='direction'>
      <ProjectButton backText='Previous Project' backLink='/project/reshare'/>
    </div>

    <Footer/>
  </ProjectsCont>
}