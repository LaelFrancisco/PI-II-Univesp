import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";

const BREAKPOINT = "768px";
const HEADER_HEIGHT = "64px";

const HeaderWrap = styled.header`
  --header-height: ${HEADER_HEIGHT};
  position: sticky;
  top: 0;
  background: #ffffff;
  border-bottom: 1px solid #eee;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
  color: #111;
`;

const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  z-index: 110;

  @media (min-width: ${BREAKPOINT}) {
    display: none;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #222;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  ${(p) =>
    p.$open &&
    `
    span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
  `}
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= parseInt(BREAKPOINT, 10)) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderWrap>
      <Container>
        <Logo>JOIAS DE ITAQUERI</Logo>

        <Burger
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((s) => !s)}
          $open={open}
        >
          <span />
          <span />
          <span />
        </Burger>

        <Navigation $open={open} />
      </Container>
    </HeaderWrap>
  );
}
