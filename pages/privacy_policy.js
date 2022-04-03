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
`

const SubTitle = styled.h2`
    width: 80vw;
`

export default function PrivacyPolicy() {

  return (
  <HomeCont>
      <Head>
      <title>Daniel Fu | Front-End Developer | BCIT D3 Web Development 2022</title>
      <link rel="shortcut icon" href="/Daniel_with_laptop.png" />
      </Head>

      <NavBar/>

      <Main>
        <h1>PRIVACY POLICY</h1>
        <Para>This policy applies to Daniel Fu Web site only. It is designed to informyou of how and why Daniel Fu gathers personal and non-personalinformation about you. This policy complies with provisions of the British Columbia Freedom of Information and Protection of Privacy Act.</Para>
        <Para>This may be Web site connected by "hyperlinks" to other Web sites. We are not responsible in anyway for the privacy practices on other Web sites and suggest that you review the privacy policieson those linked Web sites before using them.</Para>
        <Para>We are accountable for this Privacy Policy and these practices on this Web site, including thePrivacy Code set out below. If you have any questions or concerns regarding the privacy practiceson this Web site, please e-mail us.</Para>
        <SubTitle>What Information Is Collected?</SubTitle>
        <Para>Daniel Fu collects two kinds of information from this Web site.</Para>
        <Para>(A) Your voluntarily provided personal information. (B) Anonymous information about your visit.</Para>
        <Para>A. Your Personal Information:</Para>
        <Para>During normal Web site usage, you can visit this site without communicating any personalinformation. However, to make use of certain features on this site, such as gift certificates,promotions, subscriptions or newsletters, users may be asked to register with Daniel Fu Web site. As part of this voluntary registration, Daniel Fu may request contact information (such as name, mailing address, e-mail address, etc.) andother data required for operating these services. The only way we can collect personal informationfrom you is if you voluntarily provide it. By voluntarily providing this personal information to us bysending us a comment or suggestion, by entering a contest that is posted on this Web site, you willbe consenting to the collection, use and distribution of your personal information by Daniel Fu for the purposes set out. You are under no obligation to provide us withpersonal information and can access and enjoy many parts of Daniel Fu Web site without providing us any personal information. Among other things, the following is arepresentative list of reasons we may ask for your personal information:</Para>
        <ul style={{width: "80vw"}}>
            <li>To run contests, select entrants, and choose prize winners;</li>
            <li>To respond to your questions or the comments you e-mail to us;</li>
            <li>To provide you with newsletters, bulletins or other information about our design orcommunication activities.</li>
            <li>To keep aggregate information on Web site use.</li>
        </ul> 
        <Para>B. Anonymous Information About Your Visit:</Para>
        <Para>When you visit this site, information about your visit (e.g. how you navigate the site) may becollected and stored. This information may include the length of your visit, the date and time ofyour visit, the pages you look at and the sites you visit before and after leaving this site. It doesnot include personally identifiable information such as your name, mailing or e-mail address ortelephone number. We use this non-identifiable and aggregate information to better design thisWeb site and develop an efficient Web marketing plan. We also may share this information with ourWeb designer, board of directors and sponsors.</Para>
        <Para>Daniel Fu may collect the following non-identifiable information whenyou visit this Web site:</Para>
        <ul style={{width: "80vw"}}>
            <li>Your Internet Service Provider (ISP)</li>
            <li>Time of your visit</li>
            <li>Pages you visited</li>
            <li>Web Browser Used</li>
        </ul> 
        <SubTitle>What If I Do Not Agree With this Privacy Policy?</SubTitle>
        <Para>By visiting this Web site and voluntarily providing personal information to Daniel Fu Web site, you agree to the terms of this online User Agreement and the PrivacyPolicy contained herein. However, We welcome your comments and/or suggestions on improvingthis Web site and policies.</Para>
        <Para>Daniel Fu | BCIT D3 Web Development</Para>
        <Para>Last Update: April 2nd, 2022</Para>
        
        </Main>

        <Footer/>
        <Footer2/>

  </HomeCont>
  )
}