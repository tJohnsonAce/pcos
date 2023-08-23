'use client'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import * as contentful from 'contentful';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styled from 'styled-components';
import Navbar from "@/src/components/Navbar";
import Script from "next/script";
import { createGlobalStyle } from 'styled-components';
import Footer from "@/src/components/Footer";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StoriesPageContainer = styled.div`
  background: url('/pcosBGColor.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  text-align: center;
`;

const StoryContainer = styled.div`
  background: transparent; // Set background to transparent
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); // Increase shadow size and opacity
  text-align: center;
`;

const StoryTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const StoryContent = styled.div`
  color: #444;
  line-height: 1.5;
  text-align: center;
`;

var client = contentful.createClient({
  space: '6nw1ytysk29n',
  accessToken: 'bL6axO8CIC7xrM5IW88zRNQw0fXmWzr6Z1QkHLK_b3g'
});

export default function Stories(props) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'pcosStory' })
      .then((response) => setStories(response.items))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Head>
        <title>Face of PCOS - Stories</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore personal stories of women living with PCOS. Discover journeys of struggle, resilience, and triumph in a supportive community." />
        <meta name="keywords" content="PCOS, support, community, women" />
        <meta property="og:title" content="Faces of PCOS - Stories" />
        <meta property="og:description" content="Explore personal stories of women living with PCOS. Discover journeys of struggle, resilience, and triumph in a supportive community." />
        <meta property="og:image" content="/pcosLogo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Script id="gtag-main" src="https://www.googletagmanager.com/gtag/js?id=G-R50Q5G0C9Z" async></Script>
      <Script id="gtag-config" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R50Q5G0C9Z');
        ` }} />
      <GlobalStyle />
      <Navbar />
      <StoriesPageContainer>
        {stories.length > 0 ? (
          stories.map((story) => (
            <StoryContainer key={story.sys.id}>
              <TitleContainer>
                <StoryTitle>{story.fields.name}</StoryTitle>
              </TitleContainer>
              <Image
                src={`https:${story.fields.photo.fields.file.url}`}
                alt={story.fields.name}
                width={300}
                height={200}
                layout="intrinsic"
              />
              <StoryContent
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(story.fields.story),
                }}
              />
            </StoryContainer>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </StoriesPageContainer>
      <Footer />
    </div>
  );
}
