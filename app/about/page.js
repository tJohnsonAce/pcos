'use client'

import React from 'react';
import styled from 'styled-components';
import Navbar from "@/src/components/Navbar";
import { createGlobalStyle } from 'styled-components';
import Footer from "@/src/components/Footer";
import Script from "next/script";
import Image from "next/image";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImageContainer = styled.div`
  width: 100%; // Set the width as per your requirement
  max-width: 300px; // Set a max-width to limit the image size
  margin: auto;
`;



const AboutPageContainer = styled.div`
  background: url('/pcosBGColor.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 100px;
  }
`;

const MainParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
  text-align: center; 
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-family: "Arial, sans-serif";

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    margin-top: 3rem;
    line-height: 1.5;
  }
`;


const SecondaryParagraphs = styled.div`
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.2;
  width: 80%;
  font-family: "Arial, sans-serif";
  margin-top: 0rem;
  text-align: center;
`;

const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export default function About() {
  return (
    <>
      <Script id="gtag-main" src="https://www.googletagmanager.com/gtag/js?id=G-R50Q5G0C9Z" async></Script>
      <Script id="gtag-config" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R50Q5G0C9Z');
        ` }} />
      <GlobalStyle />
      <Navbar />
      <AboutPageContainer>
        <ContentContainer>
          <MainSection>
          <HeaderImageContainer>
            <Image src="/laineyAbout.jpg" alt="Main Photo" layout="responsive" width={2316} height={3088} />
          </HeaderImageContainer>
            <ImageAndTextContainer>
              <MainParagraph>
              Hi everyone! My name is Lainey Johnson, the creator of “Faces of PCOS” and Bedford’s PCOS Awareness Walk. First of all, I want to give a huge thank you to everyone who has participated and shared their PCOS stories with us! I would like to share my story and why this project is so important to me.
              </MainParagraph>
            </ImageAndTextContainer>
          </MainSection>
          <SecondaryParagraphs>
            <p>I was diagnosed in 2010 at the age of 16. I was told it was a common disorder and was immediately put on the most common drug of choice for us cysters…birth control. Basically, I was given a bandaid for my problems and sent on my way.</p>
            <p>A couple years down the road, I was still having issues with irregular periods, (I didn&apos;t continue with birth control at the time,) and other stereotypical symptoms. I was then diagnosed with PCOS with insulin resistance. I was given, you guessed it, metformin and more birth control. </p>
            <p>My husband and I got married in 2017, and started trying to grow our family in 2018. I wasn&apos;t getting pregnant, and was prescribed clomid. I was told by my doctor that she didn&apos;t feel comfortable with giving me the prescription because I was overweight, and continued lecturing me on how dangerous it is to have a baby if you&apos;re overweight. I found out a few months later, by a different doctor, that my doctor who prescribed me clomid did not give me a high enough dosage to work. Guess she really didn&apos;t want to help me because of my weight after all… But that&apos;s a story for another day. We still haven&apos;t had a baby, but we&apos;re trusting in God&apos;s plan and timing. </p>
            <p>I&apos;ve learned a lot through this journey, and I&apos;ll continue learning as I go. Having this community of women helps me in ways I cannot describe! Back when I was 16, I felt alone and scared, not sure how this disorder would affect me. Now, having each other is a huge blessing to me, and I love that we can all encourage one another!</p>
          </SecondaryParagraphs>
        </ContentContainer>
        <Footer />
      </AboutPageContainer>
    </>
  );
}

