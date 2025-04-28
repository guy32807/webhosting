import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  display: inline-block;
  background: ${props => props.secondary ? 
    `linear-gradient(135deg, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 100%)` : 
    `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.accent} 100%)`};
  color: white;
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-family: ${props => props.theme.fonts.body};
  padding: 0.875rem 1.75rem;
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  margin: ${props => props.margin || '1.25rem 0'};
  box-shadow: ${props => props.theme.shadows.md};
  border: none;
  font-size: ${props => props.large ? '1.125rem' : '1rem'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.lg};
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const CTAButton = ({ 
  text = "Get Started with InterServer", 
  className, 
  secondary = false,
  large = false,
  margin,
  onClick
}) => {
  const trackClick = () => {
    // Track click event
    console.log('CTA button clicked');
    if (onClick) onClick();
  };

  return (
    <StyledButton 
      href="https://www.kqzyfj.com/click-9083409-11337761" 
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={trackClick}
      secondary={secondary}
      large={large}
      margin={margin}
    >
      {text}
    </StyledButton>
  );
};

export default CTAButton;