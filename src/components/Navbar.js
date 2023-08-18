'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';
import Image from "next/image";

const NavBarContainer = styled.nav`
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 150px; // Adjust the width as needed
    height: auto;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none; /* Hide on larger screens */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 97%; /* You can adjust the width as needed */
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: transform 0.6s ease-in-out;
  padding: 1rem;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
`;

const CloseButton = styled(MenuButton)`
  position: absolute;
  top: 2.5rem;
  right: 3rem;
`;

const MobileLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none; // Remove the underline

  a {
    text-decoration: none; // Remove the underline for the actual anchor tag inside the Link
  }
`;




export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <NavBarContainer>
      <Logo>
        <Image src="/pcosLogo.png" alt="PCOS Logo" width="100" height="100" />
      </Logo>
        <NavLinks>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/events">Events</Link>
        </NavLinks>
        <MenuButton onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </MenuButton>
      </NavBarContainer>
      <MobileMenu open={mobileMenuOpen}>
  <CloseButton onClick={() => setMobileMenuOpen(false)}>
    <FaTimes />
  </CloseButton>
  <MobileLink href="/" passHref onClick={closeMobileMenu}>Home</MobileLink>
  <MobileLink href="/about" passHref onClick={closeMobileMenu}>About</MobileLink>
  <MobileLink href="/stories" passHref onClick={closeMobileMenu}>Stories</MobileLink>
  <MobileLink href="/events" passHref onClick={closeMobileMenu}>Events</MobileLink>
</MobileMenu>
    </>
  );
};

export default Navbar;