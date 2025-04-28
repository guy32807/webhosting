import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CTAButton from './CTAButton';

const FooterContainer = styled.footer`
  background-color: #00356b;
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const FooterExternalLink = styled.a`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Web Hosting Guide</h3>
          <p>Your trusted source for web hosting information, reviews, and comparisons since 2020. We help you find the perfect hosting solution for your needs.</p>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Hosting Reviews</h3>
          <FooterLink to="/hosting-reviews/interserver">InterServer Review</FooterLink>
          <FooterLink to="/hosting-reviews/bluehost">Bluehost Review</FooterLink>
          <FooterLink to="/hosting-reviews/siteground">SiteGround Review</FooterLink>
          <FooterLink to="/hosting-reviews/hostinger">Hostinger Review</FooterLink>
          <FooterLink to="/hosting-reviews/a2hosting">A2 Hosting Review</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Hosting Guides</h3>
          <FooterLink to="/hosting-guides/beginners">Beginner's Guide</FooterLink>
          <FooterLink to="/hosting-guides/wordpress">WordPress Hosting</FooterLink>
          <FooterLink to="/hosting-guides/ecommerce">eCommerce Hosting</FooterLink>
          <FooterLink to="/hosting-guides/vps">VPS Hosting Guide</FooterLink>
          <FooterLink to="/hosting-guides/security">Hosting Security</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Find Your Ideal Host</h3>
          <p>Looking for reliable web hosting with great features and support?</p>
          <CTAButton text="Check Top Hosting Deals" />
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} Web Hosting Guide. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;