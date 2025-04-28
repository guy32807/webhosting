import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #0078d7;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    color: #00356b;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0078d7;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          Web<span>HostingGuide</span>
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <MenuItems isOpen={isMenuOpen}>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/hosting-reviews">Hosting Reviews</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/comparisons">Comparisons</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/hosting-guides">Guides</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog">Blog</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;