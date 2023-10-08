"use client";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import * as contentful from "contentful";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Link from "next/link";

import { createGlobalStyle } from "styled-components";
import Script from "next/script";
import { NextSeo } from "next-seo";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const BlogPageContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const OuterCard = styled.div`
  width: 100%;
  max-width: 1400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  background-color: #f9f9f9;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const BlogTitle = styled.h2`
  margin-bottom: 10px;
`;

const BlogImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const BlogContent = styled.div`
  line-height: 1.5;
`;

const ReadMoreButton = styled.a`
  background-color: #24c6c5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`;

var client = contentful.createClient({
  space: "6nw1ytysk29n",
  accessToken: "bL6axO8CIC7xrM5IW88zRNQw0fXmWzr6Z1QkHLK_b3g",
});

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [showContent, setShowContent] = useState({});

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    client
      .getEntries({ content_type: "blog" })
      .then((response) => setBlogs(response.items))
      .catch(console.error);
  }, []);

  const toggleContent = (id) => {
    setShowContent((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <NextSeo
        title="PCOS Awareness Blog"
        description="A blog aimed to bring awareness and offer support to women with PCOS."
        openGraph={{
          type: "website",
          url: "https://facesofpcos.com/blog",
          title: "Faces Of PCOS Blog",
          description:
            "A blog aimed to bring awareness and offer support to women with PCOS.",
          images: [
            {
              url: "/facesOfPcosBlogImage.jpg",
              width: 1200,
              height: 630,
              alt: "PCOS Awareness Blog Image",
            },
          ],
        }}
      />
      <Script
        id="gtag-main"
        src="https://www.googletagmanager.com/gtag/js?id=G-R50Q5G0C9Z"
        async
      ></Script>
      <Script
        id="gtag-config"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R50Q5G0C9Z');
        `,
        }}
      />
      <GlobalStyle />
      <Navbar />
      <BlogPageContainer>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <OuterCard key={blog.sys.id}>
              <BlogContainer>
                <BlogImage>
                  {blog.fields?.blogImage?.fields?.file?.url ? (
                    <Image
                      src={`https:${blog.fields.blogImage.fields.file.url}`}
                      alt={blog.fields.blogTitle}
                      width={300}
                      height={200}
                      layout="intrinsic"
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </BlogImage>
                <BlogInfo>
                  <BlogTitle>{blog.fields?.blogTitle}</BlogTitle>
                  <p>{formatDate(blog.fields.datePublished)}</p>
                  <p>{blog.fields?.blogSummary}</p>
                  {showContent[blog.sys.id] && (
                    <BlogContent
                      dangerouslySetInnerHTML={{
                        __html: documentToHtmlString(blog.fields?.blogBody),
                      }}
                    />
                  )}
                  <Link href={`/blog/${blog.sys.id}`} passHref>
                    <ReadMoreButton>Read More</ReadMoreButton>
                  </Link>
                </BlogInfo>
              </BlogContainer>
            </OuterCard>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </BlogPageContainer>
      <Footer />
    </>
  );
}
