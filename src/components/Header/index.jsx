import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
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
  margin-right: auto;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserName = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  padding: 6px 12px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }
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
  const [usuario, setUsuario] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    if (userData) {
      setUsuario(JSON.parse(userData));
    }
  }, [location]);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUsuario(null);
    navigate("/");

    window.location.reload();
  };

  return (
    <HeaderWrap>
      <Container>
        <Logo>JOIAS DE ITAQUERI</Logo>

        {usuario && (
          <UserInfo>
            <UserName>Olá, {usuario["Nome do usuario"]}</UserName>
            <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
          </UserInfo>
        )}

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

        <Navigation $open={open} usuario={usuario} onLogout={handleLogout} />
      </Container>
    </HeaderWrap>
  );
}
