import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as contentful from "contentful";
import Image from "next/image";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import styled from "styled-components";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { createGlobalStyle } from "styled-components";
import { NextSeo } from "next-seo";
import Script from "next/script";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }
`;

const CenteredContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: auto;
  padding: 0 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const InlineBlock = styled.div`
  display: inline-block;
  max-width: 800px;
  @media (max-width: 768px) {
    display: block;
    max-width: 100%;
  }
`;

const LeftAlignedText = styled.div`
  text-align: left;
  display: inline-block;
  max-width: 800px;
  font-size: 18px;
  @media (max-width: 768px) {
    display: block;
    max-width: 100%;
    font-size: 16px;
    padding: 0 10px;
  }
`;

const CardContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/New_York",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (id) {
      const client = contentful.createClient({
        space: "6nw1ytysk29n",
        accessToken: "bL6axO8CIC7xrM5IW88zRNQw0fXmWzr6Z1QkHLK_b3g",
      });

      client
        .getEntry(id)
        .then((entry) => setBlog(entry))
        .catch(console.error);
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <NextSeo
        title={blog ? blog.fields.blogTitle : "Loading..."}
        description={
          blog ? "Description based on individual blog data" : "Loading..."
        }
        openGraph={{
          type: "article",
          url: `https://facesofpcos.com/blog/${id}`,
          title: blog ? blog.fields.blogTitle : "Loading...",
          description: blog
            ? "Description based on individual blog data"
            : "Loading...",
          images: [
            {
              url: blog
                ? `https:${blog.fields.blogImage.fields.file.url}`
                : "Default image URL",
              width: 800,
              height: 600,
              alt: blog ? blog.fields.blogTitle : "Default Alt",
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
      <CenteredContainer>
        <CardContainer>
          <h1>{blog.fields.blogTitle}</h1>
          <h2>{blog.fields.Author}</h2>
          <p>{formatDate(blog.fields.datePublished)}</p>
          {blog.fields?.blogImage?.fields?.file?.url && (
            <InlineBlock>
              <Image
                src={`https:${blog.fields.blogImage.fields.file.url}`}
                alt={blog.fields.blogTitle}
                width={300}
                height={200}
                layout="intrinsic"
              />
            </InlineBlock>
          )}
          <LeftAlignedText
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(blog.fields.blogBody),
            }}
          />
        </CardContainer>
      </CenteredContainer>
      <Footer />
    </>
  );
}
