import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BREAKPOINT = "768px";

const Nav = styled.nav`
  @media (max-width: ${BREAKPOINT}) {
    position: fixed;
    left: 0;
    right: 0;
    top: var(--header-height, 64px);
    background: #ffffff;
    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.25s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    z-index: 90;
  }

  @media (min-width: ${BREAKPOINT}) {
    position: static;
    transform: none;
    box-shadow: none;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: ${BREAKPOINT}) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }

  @media (min-width: ${BREAKPOINT}) {
    flex-direction: row;
    gap: 1rem;
    padding: 0;
    align-items: center;
    display: flex;
  }

  li {
    margin: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #222;
  font-weight: 600;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:focus {
    outline: 3px solid rgba(0, 123, 255, 0.15);
    outline-offset: 2px;
  }

  &[aria-current="page"] {
    background: #007bff;
    color: #fff;
    font-weight: 700;
  }
`;

const navItems = [
  { path: "/", label: "Home" },
  { path: "/cidades", label: "Cidades" },
  { path: "/eventos", label: "Eventos" },
  { path: "/pontos-turisticos", label: "Pontos Turísticos" },
  { path: "/registro", label: "Registro" },
  { path: "/login", label: "Login" },
];

export default function Navigation({ $open = false }) {
  return (
    <Nav id="primary-navigation" $open={$open} role="navigation">
      <Ul $open={$open}>
        {navItems.map((item) => (
          <li key={item.path}>
            <StyledNavLink to={item.path} end>
              {item.label}
            </StyledNavLink>
          </li>
        ))}
      </Ul>
    </Nav>
  );
}
