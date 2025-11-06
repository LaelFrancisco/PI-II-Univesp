import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BREAKPOINT = "768px";

export const Nav = styled.nav`
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

export const Ul = styled.ul`
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

export const StyledNavLink = styled(NavLink)`
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

export const UserMobileSection = styled.div`
  padding: 1rem;
  border-top: 1px solid #eee;
  display: ${({ $open }) => ($open ? "block" : "none")};

  @media (min-width: ${BREAKPOINT}) {
    display: none;
  }
`;

export const UserMobileInfo = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const UserMobileName = styled.strong`
  color: #1f2937;
`;

export const LogoutButtonMobile = styled.button`
  padding: 8px 16px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }
`;
