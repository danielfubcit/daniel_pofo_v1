import Head from 'next/head';
import styled from 'styled-components';
import React, {useState, useRef, useEffect}  from 'react';
import NavBar from '@/comps/NavBar';
import Footer from '@/comps/Footer';
import Footer2 from '@/comps/Footer2';

const HomeCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 40px;

    @media (max-width:450px) {
      margin-top: 60px;
    }
`

const Para = styled.div`
    width: 80vw;
    font-size: 16px;
    margin-bottom: 20px;

    @media (max-width:450px) {
      font-size: 14px;
    }
`

export default function TermsOfUse() {

  return (
  <HomeCont>
      <Head>
      <title>Daniel Fu | Front-End Developer | BCIT D3 Web Development 2022</title>
      <link rel="shortcut icon" href="/Daniel_with_laptop.png" />
      </Head>

      <NavBar/>

      <Main>
        <h1>TERMS OF USE</h1>
        <Para>Daniel Fu welcomes you to its Web site. Using this Web site indicatesyour consent and agreement to be bound by this User Agreement and any policies or practicescontained herein.</Para>
        <Para>All content and information (including, but not limited to, code, graphics, photos, guides, promotional materials, press releases, articles, plans, schedules, illustrations, audio clips, andvideo clips) displayed on this Web site is owned or licensed by Daniel Fu and its respective owners, all content on this site is protected by copyright and other intellectualproperty laws. Any names, titles, logos and designs displayed on the Web site that contain Daniel Fu, titles, logos, or brands are the exclusive property and trademarks of Daniel Fu or its members. You may not modify, publish, transmit,transfer, sell, reproduce, re-post or alter any such content. Daniel Fu hereby grants you a personal, non-exclusive, non-assignable and non-transferable license to useand display, for home, non-commercial and personal use only, one copy of any content that youmay download from this Web site. Any other use or reproduction of this Web site, in whole or inpart, will be considered to be a violation of Daniel Fu’ intellectual property rights.</Para>
        <Para>Your use of this Web site constitutes your agreement to abide by these terms of use included in thisonline User Agreement. Daniel Fu reserves the right to modify, alter or otherwise update this User Agreement at any time.</Para>
        <Para>If you disagree with any of the above terms of use or any part of the User Agreement, do not use this Web site.</Para>
        <Para>Last Update: April 2nd, 2022</Para>
        <Para>Daniel Fu | BCIT D3 Web Development</Para>
        </Main>

        <Footer/>
        <Footer2/>

  </HomeCont>
  )
}