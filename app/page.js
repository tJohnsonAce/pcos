'use client'

import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const HomePageContainer = styled.div`
  background: url('/pcosDesktopBG2.jpeg') no-repeat center center, 
              url('/pcosBGColor.png') no-repeat center center; // Large screens
  background-size: contain, cover; // contain for the first image, cover for the second
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background: url('/pcosMobileBG.jpeg') no-repeat center center,
                url('/pcosBGColor.png') no-repeat center center; // Small screens
    background-size: contain, cover; // contain for the first image, cover for the second
  }
`;




const Title = styled.div`
  width: 2100px; /* You can adjust the width as needed */
  height: 700px; /* You can adjust the height as needed */
  background: url('/pcosTitleBG.png') no-repeat center center;
  background-size: contain; // Adjust as needed
`;


const TealText = styled.span`
  color: teal;
  display: block; /* This will make the text display on a new line */
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomePageContainer>
        <Title />
      </HomePageContainer>
      <Footer />
    </>
  );
}
