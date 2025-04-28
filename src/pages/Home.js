import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #00356b 0%, #0078d7 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto 30px;
`;

const FeaturesSection = styled.section`
  padding: 80px 20px;
  background: #f9f9f9;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  
  h3 {
    color: #0078d7;
    margin-bottom: 15px;
  }
`;

const ProvidersSection = styled.section`
  padding: 80px 20px;
  background: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #00356b;
`;

const ProvidersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProviderCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProviderLogo = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  
  img {
    max-width: 80%;
    max-height: 80px;
  }
`;

const ProviderInfo = styled.div`
  padding: 25px;
  
  h3 {
    margin-bottom: 10px;
    color: #00356b;
  }
  
  .highlight {
    color: #0078d7;
    font-weight: bold;
  }
  
  .features {
    margin: 15px 0;
    padding-left: 20px;
  }
  
  .rating {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    
    .stars {
      color: #ffb400;
      margin-right: 8px;
    }
  }
`;

const GuideSection = styled.section`
  padding: 80px 20px;
  background: #f0f7ff;
`;

const GuidesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const GuideCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    margin: 0 0 15px;
    color: #00356b;
  }
  
  .image {
    height: 200px;
    background-color: #ddd;
    background-size: cover;
    background-position: center;
  }
  
  .content {
    padding: 25px;
  }
`;

const Home = () => {
  return (
    <>
      <SEO 
        title="Web Hosting Guide - Find the Best Hosting for Your Website" 
        description="Compare the best web hosting providers with our unbiased reviews and guides. Find the perfect hosting solution for your website needs and budget."
        canonicalUrl="https://your-webhosting-guide.com"
      />
      
      <HeroSection>
        <HeroTitle>Find the Perfect Web Hosting for Your Website</HeroTitle>
        <HeroSubtitle>
          Compare top hosting providers, read expert reviews, and discover the best deals
          to make an informed decision for your online presence.
        </HeroSubtitle>
        <CTAButton text="Explore Top Hosting Providers" />
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Why Trust Our Hosting Reviews?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Unbiased Reviews</h3>
            <p>Our reviews are based on extensive testing and real experience with each hosting provider.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Comprehensive Comparisons</h3>
            <p>We compare hosting providers across all important metrics so you can find your perfect match.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Up-to-Date Information</h3>
            <p>Our content is regularly updated to reflect changes in pricing, features, and performance.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Expert Guides</h3>
            <p>Learn everything you need to know about web hosting with our beginner-friendly guides.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Exclusive Deals</h3>
            <p>We negotiate special discounts with top providers to help you save on your hosting.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Reader-Focused Approach</h3>
            <p>Our recommendations prioritize what's truly best for different user needs and budgets.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <ProvidersSection>
        <SectionTitle>Top Rated Hosting Providers</SectionTitle>
        <ProvidersGrid>
          <ProviderCard>
            <ProviderLogo>
              {/* Replace with actual logo */}
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0078d7'}}>InterServer</div>
            </ProviderLogo>
            <ProviderInfo>
              <div className="rating">
                <span className="stars">★★★★★</span> 
                <span>4.8/5</span>
              </div>
              <h3>InterServer</h3>
              <p>Starting at <span className="highlight">$2.50/mo</span></p>
              <ul className="features">
                <li>Price-Lock Guarantee</li>
                <li>99.9% Uptime</li>
                <li>Free Website Migration</li>
              </ul>
              <CTAButton text="View Deals" />
            </ProviderInfo>
          </ProviderCard>
          
          <ProviderCard>
            <ProviderLogo>
              {/* Replace with actual logo */}
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0078d7'}}>Bluehost</div>
            </ProviderLogo>
            <ProviderInfo>
              <div className="rating">
                <span className="stars">★★★★☆</span> 
                <span>4.6/5</span>
              </div>
              <h3>Bluehost</h3>
              <p>Starting at <span className="highlight">$2.95/mo</span></p>
              <ul className="features">
                <li>Free Domain Name</li>
                <li>WordPress Recommended</li>
                <li>24/7 Support</li>
              </ul>
              <CTAButton text="View Deals" />
            </ProviderInfo>
          </ProviderCard>
          
          <ProviderCard>
            <ProviderLogo>
              {/* Replace with actual logo */}
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0078d7'}}>SiteGround</div>
            </ProviderLogo>
            <ProviderInfo>
              <div className="rating">
                <span className="stars">★★★★★</span> 
                <span>4.9/5</span>
              </div>
              <h3>SiteGround</h3>
              <p>Starting at <span className="highlight">$3.99/mo</span></p>
              <ul className="features">
                <li>Premium Speed & Support</li>
                <li>Free Site Migration</li>
                <li>Advanced Security</li>
              </ul>
              <CTAButton text="View Deals" />
            </ProviderInfo>
          </ProviderCard>
        </ProvidersGrid>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <CTAButton text="Compare All Hosting Providers" />
        </div>
      </ProvidersSection>

      <GuideSection>
        <SectionTitle>Hosting Guides & Resources</SectionTitle>
        <GuidesGrid>
          <GuideCard>
            <div className="image" style={{backgroundColor: '#0078d7'}}></div>
            <div className="content">
              <h3>Web Hosting for Beginners</h3>
              <p>Everything you need to know to get started with web hosting, explained in simple terms.</p>
              <Link to="/hosting-guides/beginners" style={{color: '#0078d7', textDecoration: 'none', fontWeight: 'bold'}}>Read Guide →</Link>
            </div>
          </GuideCard>
          
          <GuideCard>
            <div className="image" style={{backgroundColor: '#00356b'}}></div>
            <div className="content">
              <h3>WordPress Hosting Guide</h3>
              <p>Learn how to choose the best WordPress hosting for your blog or business website.</p>
              <Link to="/hosting-guides/wordpress" style={{color: '#0078d7', textDecoration: 'none', fontWeight: 'bold'}}>Read Guide →</Link>
            </div>
          </GuideCard>
          
          <GuideCard>
            <div className="image" style={{backgroundColor: '#0078d7'}}></div>
            <div className="content">
              <h3>Web Hosting Security</h3>
              <p>Protect your website with our comprehensive guide to web hosting security best practices.</p>
              <Link to="/hosting-guides/security" style={{color: '#0078d7', textDecoration: 'none', fontWeight: 'bold'}}>Read Guide →</Link>
            </div>
          </GuideCard>
        </GuidesGrid>
      </GuideSection>
    </>
  );
};

export default Home;