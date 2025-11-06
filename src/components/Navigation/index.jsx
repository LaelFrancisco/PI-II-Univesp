import React from "react";
import {
  Nav,
  Ul,
  StyledNavLink,
  UserMobileSection,
  UserMobileInfo,
  UserMobileName,
  LogoutButtonMobile,
} from "./styles";

const baseNavItems = [
  { path: "/", label: "Home" },
  { path: "/cidades", label: "Cidades" },
  { path: "/eventos", label: "Eventos" },
  { path: "/pontos-turisticos", label: "Pontos Turísticos" },
];

export default function Navigation({
  $open = false,
  usuario = null,
  onLogout = () => {},
}) {
  const navItems = usuario
    ? baseNavItems
    : [
        ...baseNavItems,
        { path: "/registro", label: "Registro" },
        { path: "/login", label: "Login" },
      ];

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

      {usuario && (
        <UserMobileSection $open={$open}>
          <UserMobileInfo>
            Logado como:{" "}
            <UserMobileName>{usuario["Nome do usuario"]}</UserMobileName>
          </UserMobileInfo>
          <LogoutButtonMobile onClick={onLogout}>
            Sair da Conta
          </LogoutButtonMobile>
        </UserMobileSection>
      )}
    </Nav>
  );
}
