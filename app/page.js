'use client'

import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import styled from 'styled-components';
import Script from "next/script";
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
              url('/pcosBGColor.png') no-repeat center center;
  background-size: contain, cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background: url('/pcosMobileBG.jpeg') no-repeat center center,
                url('/pcosBGColor.png') no-repeat center center;
    background-size: contain, cover;
  }
`;

const Title = styled.div`
  width: 2100px;
  height: 700px;
  background: url('/pcosTitleBG.png') no-repeat center center;
  background-size: contain;
`;

export default function Home() {
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
      <HomePageContainer>
        <Title />
      </HomePageContainer>
      <Footer />
    </>
  );
}
