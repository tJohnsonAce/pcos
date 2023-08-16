'use client'

import React from 'react';
import styled from 'styled-components';
import Navbar from "@/src/components/Navbar";

import { createGlobalStyle } from 'styled-components';
import Footer from "@/src/components/Footer";

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

const HeaderImage = styled.img`
  max-width: 300px;
  width: 100%;
  margin-right: 0; // set to 0
  margin: auto; // center the image

  @media (min-width: 768px) {
    width: 30%;
    margin-right: 2rem; // apply the original margin-right value at larger screen sizes
  }
`;

const AboutPageContainer = styled.div`
  background: url('/pcosBGColor.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh; // use min-height instead of fixed height
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // align content to the top
  padding-top: 80px; // padding to prevent content overlap with the navbar
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
  line-height: 1.2; // Reduce line spacing for mobile
  text-align: center; // Left-aligned text
  width: 100%;
  margin-bottom: 1rem; // Increase the bottom margin
  margin-top: 1rem; // Increase the top margin
  font-family: "Arial, sans-serif"; // Consider using a more readable font

  @media (min-width: 768px) {
    margin-bottom: 3rem; // You can adjust this for larger screens
    margin-top: 3rem;
    line-height: 1.5; // Adjust for larger screens if needed
  }
`;


const SecondaryParagraphs = styled.div`
  text-align: left; // Left-aligned text
  font-size: 1.4rem;
  line-height: 1.2; // Reduce line spacing for mobile
  width: 80%;
  font-family: "Arial, sans-serif"; // Consider using a more readable font
  margin-top: 0rem; // Reduce the top margin to bring closer to the main section
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
      <GlobalStyle />
      <Navbar />
      <AboutPageContainer>
        <ContentContainer>
          <MainSection>
            <HeaderImage src="/laineyAbout.jpg" alt="Main Photo" />
            <ImageAndTextContainer>
              <MainParagraph>
              Hi everyone! My name is Lainey Johnson, the creator of “Faces of PCOS” and Bedford’s PCOS Awareness Walk. First of all, I want to give a huge thank you to everyone who has participated and shared their PCOS stories with us! I would like to share my story and why this project is so important to me.
              </MainParagraph>
            </ImageAndTextContainer>
          </MainSection>
          <SecondaryParagraphs>
            <p>              I was diagnosed in 2010 at the age of 16. I was told it was a common disorder and was immediately put on the most common drug of choice for us cysters…birth control. Basically, I was given a bandaid for my problems and sent on my way.</p>
            <p>A couple years down the road, I was still having issues with irregular periods, (I didn’t continue with birth control at the time,) and other stereotypical symptoms. I was then diagnosed with PCOS with insulin resistance. I was given, you guessed it, metformin and more birth control. </p>
            <p>My husband and I got married in 2017, and started trying to grow our family in 2018. I wasn’t getting pregnant, and was prescribed clomid. I was told by my doctor that she didn’t feel comfortable with giving me the prescription because I was overweight, and continued lecturing me on how dangerous it is to have a baby if you’re overweight. I found out a few months later, by a different doctor, that my doctor who prescribed me clomid did not give me a high enough dosage to work. Guess she really didn’t want to help me because of my weight after all… But that’s a story for another day. We still haven’t had a baby, but we’re trusting in God’s plan and timing. </p>
            <p>I’ve learned a lot through this journey, and I’ll continue learning as I go. Having this community of women helps me in ways I cannot describe! Back when I was 16, I felt alone and scared, not sure how this disorder would affect me. Now, having each other is a huge blessing to me, and I love that we can all encourage one another!</p>
          </SecondaryParagraphs>
        </ContentContainer>
        <Footer />
      </AboutPageContainer>
    </>
  );
}

