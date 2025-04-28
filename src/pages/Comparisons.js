import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';

const ComparisonContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 50px;
  
  h1 {
    font-size: 2.8rem;
    color: #00356b;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ComparisonControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#0078d7' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid ${props => props.active ? '#0078d7' : '#ddd'};
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#00356b' : '#f0f7ff'};
    border-color: ${props => props.active ? '#00356b' : '#0078d7'};
  }
`;

const FeatureToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  label {
    font-weight: 500;
    cursor: pointer;
  }
  
  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

const ComparisonTable = styled.div`
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background: #f9f9f9;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  th:first-child {
    text-align: left;
    position: sticky;
    left: 0;
    background: #f9f9f9;
    z-index: 20;
  }
  
  td:first-child {
    text-align: left;
    font-weight: 500;
    position: sticky;
    left: 0;
    background: white;
    z-index: 5;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  .provider-header {
    min-width: 200px;
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #0078d7;
      margin-bottom: 10px;
    }
    
    .rating {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      
      .stars {
        color: #ffb400;
        margin-right: 8px;
      }
    }
  }
  
  .feature-cell {
    &.positive {
      color: #00a651;
    }
    
    &.negative {
      color: #dc3545;
    }
    
    &.neutral {
      color: #666;
    }
  }
  
  .price-cell {
    font-weight: 600;
    
    .highlight {
      color: #0078d7;
    }
    
    .original {
      text-decoration: line-through;
      color: #999;
      font-size: 0.9em;
      display: block;
    }
  }
  
  .feature-row-title {
    background: #f0f7ff;
    color: #00356b;
    font-weight: 600;
  }
`;

const AffiliateBadge = styled.div`
  display: inline-block;
  font-size: 0.7rem;
  padding: 3px 6px;
  background: #f0f7ff;
  color: #0078d7;
  border-radius: 3px;
  margin-left: 5px;
  vertical-align: middle;
`;

const CTASection = styled.div`
  background: #f0f7ff;
  padding: 40px;
  border-radius: 8px;
  margin-top: 60px;
  text-align: center;
  
  h2 {
    color: #00356b;
    margin-bottom: 15px;
  }
  
  p {
    margin-bottom: 25px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Comparisons = () => {
  const [activeFilter, setActiveFilter] = useState('shared');
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  
  const hostingProviders = {
    shared: [
      {
        name: 'InterServer',
        logo: 'InterServer',
        rating: 4.8,
        stars: '★★★★★',
        price: {
          current: '$2.50/mo',
          original: '$7.00/mo'
        },
        features: {
          storage: 'Unlimited',
          bandwidth: 'Unlimited',
          websites: 'Unlimited',
          cpuCores: '1 Core (Shared)',
          ram: '2GB (Shared)',
          sslCertificate: 'Free',
          domainRegistration: '$7.99/yr extra',
          emailAccounts: 'Unlimited',
          backups: 'Weekly',
          cpanel: 'Yes',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes (450+ Apps)',
          priceLock: 'Yes (Lifetime)',
          datacenters: 'US Only',
          migration: 'Free'
        },
        pros: ['Price-Lock Guarantee', 'Unlimited Resources', 'Weekly Backups'],
        cons: ['US-only data centers', 'No free domain'],
        affiliate: true,
        cta: 'View Deals'
      },
      {
        name: 'eUKhost',
        logo: 'eUKhost',
        rating: 4.7,
        stars: '★★★★★',
        price: {
          current: '£3.99/mo',
          original: '£7.99/mo'
        },
        features: {
          storage: '10GB SSD',
          bandwidth: 'Unlimited',
          websites: '1',
          cpuCores: '1 Core (Shared)',
          ram: '1GB (Shared)',
          sslCertificate: 'Free',
          domainRegistration: 'Free for 1st year',
          emailAccounts: '10',
          backups: 'Daily',
          cpanel: 'Yes',
          uptimeGuarantee: '99.95%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 UK Support',
          autoInstaller: 'Yes (Softaculous)',
          priceLock: 'No',
          datacenters: 'UK',
          migration: 'Free'
        },
        pros: ['UK-based data centers', 'Free domain', 'Daily backups'],
        cons: ['Limited storage on base plan', 'Price increases on renewal'],
        affiliate: true,
        cta: 'View Deals'
      },
      {
        name: 'Bluehost',
        logo: 'Bluehost',
        rating: 4.6,
        stars: '★★★★☆',
        price: {
          current: '$2.95/mo',
          original: '$8.99/mo'
        },
        features: {
          storage: '50GB SSD',
          bandwidth: 'Unmetered',
          websites: '1',
          cpuCores: '1 Core (Shared)',
          ram: '2GB (Shared)',
          sslCertificate: 'Free',
          domainRegistration: 'Free for 1st year',
          emailAccounts: '5',
          backups: 'Weekly',
          cpanel: 'Yes (Custom)',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'US, India, China',
          migration: 'Free with higher plans'
        },
        pros: ['WordPress recommended', 'Free domain', 'Easy to use interface'],
        cons: ['Higher renewal rates', 'Limited email accounts on base plan'],
        affiliate: false,
        cta: 'View Deals'
      },
      {
        name: 'SiteGround',
        logo: 'SiteGround',
        rating: 4.9,
        stars: '★★★★★',
        price: {
          current: '$3.99/mo',
          original: '$14.99/mo'
        },
        features: {
          storage: '10GB SSD',
          bandwidth: 'Unmetered',
          websites: '1',
          cpuCores: '1 Core (Shared)',
          ram: '2GB (Shared)',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'Daily',
          cpanel: 'Custom Panel',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'US, UK, EU, Asia, Australia',
          migration: 'Free'
        },
        pros: ['Excellent support', 'Superior performance', 'Daily backups'],
        cons: ['Higher renewal prices', 'Limited storage on base plan'],
        affiliate: false,
        cta: 'View Deals'
      }
    ],
    vps: [
      {
        name: 'InterServer',
        logo: 'InterServer',
        rating: 4.7,
        stars: '★★★★★',
        price: {
          current: '$6.00/mo',
          original: '$6.00/mo'
        },
        features: {
          storage: '30GB SSD',
          bandwidth: '1TB',
          websites: 'Unlimited',
          cpuCores: '1 Core',
          ram: '2GB',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'Weekly',
          cpanel: 'Optional extra',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes',
          priceLock: 'Yes (Lifetime)',
          datacenters: 'US Only',
          migration: 'Free'
        },
        pros: ['Price-Lock Guarantee', 'Highly customizable', 'Scalable resources'],
        cons: ['US-only data centers', 'cPanel costs extra'],
        affiliate: true,
        cta: 'View Deals'
      },
      {
        name: 'eUKhost',
        logo: 'eUKhost',
        rating: 4.8,
        stars: '★★★★★',
        price: {
          current: '£24.99/mo',
          original: '£29.99/mo'
        },
        features: {
          storage: '50GB SSD',
          bandwidth: 'Unlimited',
          websites: 'Unlimited',
          cpuCores: '2 Cores',
          ram: '4GB',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'Daily',
          cpanel: 'Yes',
          uptimeGuarantee: '99.95%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 UK Managed Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'UK',
          migration: 'Free'
        },
        pros: ['UK-based servers', 'Managed service', 'High performance'],
        cons: ['Higher price point', 'Price increases on renewal'],
        affiliate: true,
        cta: 'View Deals'
      },
      {
        name: 'Bluehost',
        logo: 'Bluehost',
        rating: 4.5,
        stars: '★★★★☆',
        price: {
          current: '$19.99/mo',
          original: '$29.99/mo'
        },
        features: {
          storage: '30GB SSD',
          bandwidth: '1TB',
          websites: 'Unlimited',
          cpuCores: '2 Cores',
          ram: '2GB',
          sslCertificate: 'Free',
          domainRegistration: 'Free for 1st year',
          emailAccounts: 'Unlimited',
          backups: 'Weekly',
          cpanel: 'Yes',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'US',
          migration: 'No'
        },
        pros: ['Easy management interface', 'Free domain', 'Good for WordPress'],
        cons: ['Higher renewal rates', 'Limited resources for price'],
        affiliate: false,
        cta: 'View Deals'
      },
      {
        name: 'SiteGround',
        logo: 'SiteGround',
        rating: 4.7,
        stars: '★★★★★',
        price: {
          current: '$100.00/mo',
          original: '$100.00/mo'
        },
        features: {
          storage: '40GB SSD',
          bandwidth: '5TB',
          websites: 'Unlimited',
          cpuCores: '4 Cores',
          ram: '8GB',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'Daily',
          cpanel: 'Custom Panel',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'US, UK, EU, Asia, Australia',
          migration: 'Free'
        },
        pros: ['Premium performance', 'Managed service', 'Global data centers'],
        cons: ['Expensive', 'No price lock guarantee'],
        affiliate: false,
        cta: 'View Deals'
      }
    ],
    dedicated: [
      {
        name: 'InterServer',
        logo: 'InterServer',
        rating: 4.6,
        stars: '★★★★★',
        price: {
          current: '$49.00/mo',
          original: '$49.00/mo'
        },
        features: {
          storage: '250GB SSD',
          bandwidth: '10TB',
          websites: 'Unlimited',
          cpuCores: '4 Cores',
          ram: '8GB',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'Self-managed',
          cpanel: 'Optional extra',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes',
          priceLock: 'Yes (Lifetime)',
          datacenters: 'US Only',
          migration: 'Free'
        },
        pros: ['Price-Lock Guarantee', 'Powerful hardware', 'Full root access'],
        cons: ['US-only data centers', 'Limited managed services'],
        affiliate: true,
        cta: 'View Deals'
      },
      {
        name: 'eUKhost',
        logo: 'eUKhost',
        rating: 4.9,
        stars: '★★★★★',
        price: {
          current: '£79.99/mo',
          original: '£99.99/mo'
        },
        features: {
          storage: '2x500GB SSD',
          bandwidth: 'Unlimited',
          websites: 'Unlimited',
          cpuCores: '8 Cores',
          ram: '16GB',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'Daily',
          cpanel: 'Yes',
          uptimeGuarantee: '99.95%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 UK Managed Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'UK',
          migration: 'Free'
        },
        pros: ['UK-based servers', 'Fully managed service', 'Enterprise hardware'],
        cons: ['Higher price point', 'Price increases on renewal'],
        affiliate: true,
        cta: 'View Deals'
      },
      {
        name: 'Bluehost',
        logo: 'Bluehost',
        rating: 4.4,
        stars: '★★★★☆',
        price: {
          current: '$79.99/mo',
          original: '$119.99/mo'
        },
        features: {
          storage: '500GB SSD',
          bandwidth: '5TB',
          websites: 'Unlimited',
          cpuCores: '4 Cores',
          ram: '8GB',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'No',
          cpanel: 'Yes',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'US',
          migration: 'No'
        },
        pros: ['Good for high-traffic sites', 'Reliable infrastructure', 'Easy control panel'],
        cons: ['Limited backup options', 'US-only data centers'],
        affiliate: false,
        cta: 'View Deals'
      },
      {
        name: 'SiteGround',
        logo: 'SiteGround',
        rating: 4.8,
        stars: '★★★★★',
        price: {
          current: '$269.00/mo',
          original: '$269.00/mo'
        },
        features: {
          storage: '960GB SSD',
          bandwidth: '10TB',
          websites: 'Unlimited',
          cpuCores: '12 Cores',
          ram: '32GB',
          sslCertificate: 'Free',
          domainRegistration: 'No',
          emailAccounts: 'Unlimited',
          backups: 'Daily',
          cpanel: 'Custom Panel',
          uptimeGuarantee: '99.9%',
          moneyBackGuarantee: '30 Days',
          support: '24/7 Priority Support',
          autoInstaller: 'Yes',
          priceLock: 'No',
          datacenters: 'US, UK, EU, Asia, Australia',
          migration: 'Free'
        },
        pros: ['Premium hardware', 'Multiple locations', 'Exceptional support'],
        cons: ['Very expensive', 'Yearly commitment required'],
        affiliate: false,
        cta: 'View Deals'
      }
    ]
  };
  
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  const renderProviders = () => {
    const providers = hostingProviders[activeFilter];
    
    return providers.map(provider => (
      <td key={provider.name} className="provider-header">
        <div className="logo">{provider.logo}</div>
        <div className="rating">
          <span className="stars">{provider.stars}</span>
          <span>{provider.rating}/5</span>
        </div>
        {provider.affiliate && <AffiliateBadge>Affiliate</AffiliateBadge>}
        <CTAButton text={provider.cta} />
      </td>
    ));
  };
  
  const renderFeatureRow = (feature, label) => {
    const providers = hostingProviders[activeFilter];
    
    return (
      <tr>
        <td>{label}</td>
        {providers.map(provider => (
          <td key={provider.name} className="feature-cell">
            {provider.features[feature]}
          </td>
        ))}
      </tr>
    );
  };
  
  const renderPriceRow = () => {
    const providers = hostingProviders[activeFilter];
    
    return (
      <tr>
        <td>Monthly Price</td>
        {providers.map(provider => (
          <td key={provider.name} className="price-cell">
            <span className="highlight">{provider.price.current}</span>
            <span className="original">{provider.price.original}</span>
          </td>
        ))}
      </tr>
    );
  };
  
  const renderProsRow = () => {
    const providers = hostingProviders[activeFilter];
    
    return (
      <tr>
        <td>Pros</td>
        {providers.map(provider => (
          <td key={provider.name} className="feature-cell positive">
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              {provider.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </td>
        ))}
      </tr>
    );
  };
  
  const renderConsRow = () => {
    const providers = hostingProviders[activeFilter];
    
    return (
      <tr>
        <td>Cons</td>
        {providers.map(provider => (
          <td key={provider.name} className="feature-cell negative">
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              {provider.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </td>
        ))}
      </tr>
    );
  };
  
  return (
    <>
      <SEO 
        title="Web Hosting Comparison - Compare Top Hosting Providers (2025)" 
        description="Compare the best web hosting providers side by side. See how InterServer, eUKhost, and other top hosting companies stack up on features, performance, and price."
        canonicalUrl="https://your-webhosting-guide.com/comparisons"
      />
      
      <ComparisonContainer>
        <PageHeader>
          <h1>Web Hosting Comparison (2025)</h1>
          <p>
            Compare top web hosting providers side by side to find the perfect 
            hosting solution for your website. Our detailed comparison includes 
            features, pricing, performance metrics, and more.
          </p>
        </PageHeader>
        
        <ComparisonControls>
          <FilterButtons>
            <FilterButton 
              active={activeFilter === 'shared'} 
              onClick={() => handleFilterChange('shared')}
            >
              Shared Hosting
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'vps'} 
              onClick={() => handleFilterChange('vps')}
            >
              VPS Hosting
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'dedicated'} 
              onClick={() => handleFilterChange('dedicated')}
            >
              Dedicated Hosting
            </FilterButton>
          </FilterButtons>
          
          <FeatureToggle>
            <input 
              type="checkbox" 
              id="showAllFeatures" 
              checked={showAllFeatures}
              onChange={() => setShowAllFeatures(!showAllFeatures)}
            />
            <label htmlFor="showAllFeatures">Show all features</label>
          </FeatureToggle>
        </ComparisonControls>
        
        <ComparisonTable>
          <Table>
            <thead>
              <tr>
                <th>Features</th>
                {renderProviders()}
              </tr>
            </thead>
            <tbody>
              {renderPriceRow()}
              <tr className="feature-row-title">
                <td colSpan={5}>Performance & Resources</td>
              </tr>
              {renderFeatureRow('storage', 'Storage')}
              {renderFeatureRow('bandwidth', 'Bandwidth')}
              {renderFeatureRow('websites', 'Websites')}
              {renderFeatureRow('cpuCores', 'CPU Cores')}
              {renderFeatureRow('ram', 'RAM')}
              
              <tr className="feature-row-title">
                <td colSpan={5}>Essential Features</td>
              </tr>
              {renderFeatureRow('sslCertificate', 'SSL Certificate')}
              {renderFeatureRow('domainRegistration', 'Domain Registration')}
              {renderFeatureRow('emailAccounts', 'Email Accounts')}
              {renderFeatureRow('backups', 'Backups')}
              {renderFeatureRow('cpanel', 'Control Panel')}
              
              {showAllFeatures && (
                <>
                  <tr className="feature-row-title">
                    <td colSpan={5}>Advanced Features</td>
                  </tr>
                  {renderFeatureRow('uptimeGuarantee', 'Uptime Guarantee')}
                  {renderFeatureRow('moneyBackGuarantee', 'Money-Back Guarantee')}
                  {renderFeatureRow('support', 'Customer Support')}
                  {renderFeatureRow('autoInstaller', 'Website Installer')}
                  {renderFeatureRow('priceLock', 'Price Lock Guarantee')}
                  {renderFeatureRow('datacenters', 'Data Center Locations')}
                  {renderFeatureRow('migration', 'Website Migration')}
                </>
              )}
              
              <tr className="feature-row-title">
                <td colSpan={5}>Pros & Cons</td>
              </tr>
              {renderProsRow()}
              {renderConsRow()}
              
              <tr>
                <td>Visit Website</td>
                {hostingProviders[activeFilter].map(provider => (
                  <td key={provider.name}>
                    <CTAButton text={provider.cta} />
                  </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </ComparisonTable>
        
        <CTASection>
          <h2>Need Help Choosing the Right Hosting?</h2>
          <p>
            Finding the perfect web hosting provider can be overwhelming with so many options available.
            Our expert recommendations are tailored to different needs and budgets to help you make 
            the right choice for your website.
          </p>
          <Link to="/hosting-guides/beginners">
            <CTAButton text="Read Our Beginner's Guide to Web Hosting" />
          </Link>
        </CTASection>
      </ComparisonContainer>
    </>
  );
};

export default Comparisons;