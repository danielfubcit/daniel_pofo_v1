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

export default function CinemagicProject() {

  return <ProjectsCont>
    <Head>
      <title>Daniel Fu | Front-End Developer | BCIT D3 Web Development 2022</title>
      <link rel="shortcut icon" href="/Daniel_with_laptop.png" />
    </Head>

    <NavBar/>
  
    <div className='margin'>
    <SecTitle title='Cinemagic App' text='Jan 2022 - Apr 2022'/>
    </div>

    <div className='viewsite'>
        <div className='icon'>
            <Icon src='/link.png' width="35px" link='https://cinemagic-coral.vercel.app/' target='_blank'/>
            <Icon src='/github.png' width="35px" link='https://github.com/danielfubcit/cinemagic' target='_blank'/>
            <Icon src='/figma.png' width="35px" link='https://www.figma.com/file/XIwFONRonwcpsUlXyGe5aP/Movies-Recommender-System---CINEMAGIC?node-id=23%3A170' target='_blank'/>
        </div>
    </div>

    <HeroImages
    src1='/cinemagic3.png'
    src2='/cinemagic1.png'
    src3='/cinemagic2.png'
    src4=''
    src5=''
    />

    <Block/>

    <div className='cardSec'>
        <ProjectCard 
        text='Project Manager & Front-end Developer'
        text2='Building styled-components and using Next JS to build the app'
        text3='Using Socket.IO to build the live chat'
        text4='Using Express, MongoDB, and Firebase to build the login system'
        />
        <ProjectCard 
        mainTitle='Project Overview'
        text='Cinemagic is a movie recommender app that allow users to select the movie genre, movie duration, and the released year from the homepage. After choosing the filters, the app will generate a page with matching results.'
        text2='Users can choose between light mode to dark mode and grid view to list view in the setting page.'
        text3='Also, users can click on each movie to learn more about the movie rating movie time, and users can save the movie they like to their favourite library for future reference.'
        />
        <ProjectCard mainTitle='Problem & Solution'
        text='Many movies are constantly being released every year, and people can not decide which movies to watch first.'
        text2='The solution is to design a movie recommender system to narrow their likings by using search functions and filters.'
        text3='Instead of spending a lot of time searching on each website, this application will help shorten the search time for users. The application recommend all related movies from old to new.'
        />
    </div>

    <div className='direction'>
      <ProjectButton
      nextLink='/project/reshare'
      />
    </div>
  
    <Footer/>
    <Footer2/>
  </ProjectsCont>
}