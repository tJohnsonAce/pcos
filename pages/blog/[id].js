import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as contentful from "contentful";
import Image from "next/image";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import styled from "styled-components";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { createGlobalStyle } from "styled-components";

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

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
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
      <GlobalStyle />
      <Navbar />
      <CenteredContainer>
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
      </CenteredContainer>
      <Footer />
    </>
  );
}
