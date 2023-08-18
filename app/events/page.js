'use client'

import Navbar from "@/src/components/Navbar";
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Script from "next/script";

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

const PageContainer = styled.div`
  background: url('/pcosEventsCompleteDesktop.png') no-repeat center center,
              url('/pcosBGColor.png') no-repeat center center; // Large screens
  background-size: contain, cover; // contain for the first image, cover for the second
  padding-top: 200px;
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    background: url('/pcosEventsCompleteMobile.png') no-repeat center center,
                url('/pcosBGColor.png') no-repeat center center; // Small screens
    background-size: contain, cover; // contain for the first image, cover for the second
    padding-top: 80px; // Increase padding for mobile
    min-height: 100vh; // Ensure container fills the viewport
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ButtonContainer = styled.div`
  a {
    text-decoration: none; // Remove underline from anchor
  }

  padding: 10px;
  margin: -50px auto 0; // Use negative top margin to bring it higher, auto for horizontal centering
  width: fit-content; // Use the content width
  text-align: center; // Center the text

  @media (max-width: 768px) {
    margin-top: -7vh; // Use viewport height to adjust the position on smaller screens
  }
`;

const StyledButton = styled.a`
  background-color: #24c6c5; // Adjust color as needed
  color: white; // Adjust text color as needed
  padding: 10px 20px; // Adjust padding as needed
  text-decoration: none; // Remove underline, add !important if necessary
  cursor: pointer; // Make it look clickable
  border: none; // Remove any default borders
  transition: background-color 0.3s ease; // Optional transition effect
  margin-bottom: 10px;
  text-decoration: underline; // Add underline
  text-underline-offset: 3px; // Offset the underline from the text
  text-decoration-color: #24c6c5;
  
  &:hover {
    background-color: black; // Optional hover effect
  }
`;

export default function page() {
  return (
    <>
      <Script id="gtag-main" src="https://www.googletagmanager.com/gtag/js?id=G-SMP6604EWF" async></Script>
      <Script id="gtag-config" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SMP6604EWF');
        ` }} />
      <GlobalStyle />
      <Navbar />
      <PageContainer>
      </PageContainer>
      <ButtonContainer>
        <Link href="https://fb.me/e/3LIfTJreZ?mibextid=RQdjqZ" target="_blank">
          <StyledButton>More Info</StyledButton>
        </Link>
      </ButtonContainer>
      <Footer /> 
    </>
  )
}

