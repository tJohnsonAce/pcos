import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: black;
  display: flex;
  justify-content: center; // Align items to the center
  align-items: center;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box; // Include padding and border in total width
  margin-top: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    text-decoration: none; // Remove the underline
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://m.facebook.com/groups/1012225593116109/?ref=share&mibextid=S66gvF" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/facesofpcos?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
