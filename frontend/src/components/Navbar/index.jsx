// Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import { ModeToggle } from "../modeToggle";

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled(NavLink)` // Use NavLink instead of Link for Logo
  font-size: 1.5rem;
  text-decoration: none;
//   color: #fff;

  &.active { // Define styles for active link
    color: yellow;
  }
`;
const StyledNavlink = styled(NavLink)` // Use NavLink instead of Link for Logo

  &.active { // Define styles for active link
    color: yellow;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${({ isopen }) => (isopen ? 'block' : 'none')};
  }
`;

const MenuItem = styled.li`
//   color: #fff;
  margin: 0.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isopen);
  };

  return (
    <Nav>
      <Logo exact to="/">Logo</Logo> {/* Use exact prop to match exact path */}
      <MenuIcon onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </MenuIcon>
      <Menu isopen={isopen}>
        <ModeToggle />
        <MenuItem>
          <StyledNavlink exact to="/">Home</StyledNavlink> {/* Use NavLink */}
        </MenuItem>
        <MenuItem>
          <StyledNavlink to="/about" >About</StyledNavlink> {/* Use NavLink */}
        </MenuItem>
        <MenuItem>
          <StyledNavlink to="/contact">Contact</StyledNavlink> {/* Use NavLink */}
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
