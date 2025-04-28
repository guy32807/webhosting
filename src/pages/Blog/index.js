import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

const BlogPageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: 2.8rem;
    color: #00356b;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const BlogCardImage = styled.div`
  height: 180px;
  background-color: #0078d7;
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-position: center;
`;

const BlogCardContent = styled.div`
  padding: 25px;
  
  h2 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #00356b;
  }
  
  .date {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 15px;
    display: block;
  }
  
  p {
    color: #555;
    margin-bottom: 15px;
  }
  
  .read-more {
    color: #0078d7;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CTAContainer = styled.div`
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
  }
`;

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'InterServer Hosting Features: Why They Stand Out from the Competition',
      slug: 'interserver-hosting-features',
      date: 'April 28, 2025',
      excerpt: 'Discover what makes InterServer hosting features superior. From price-lock guarantees to enterprise-grade security...',
      image: 'https://via.placeholder.com/600x400?text=InterServer+Features'
    },
    {
      id: 2,
      title: 'Web Hosting Comparison: How InterServer Beats the Competition',
      slug: 'web-hosting-comparison',
      date: 'April 22, 2025',
      excerpt: 'We compare InterServer to other leading hosting providers on price, performance, features, and support...',
      image: 'https://via.placeholder.com/600x400?text=Hosting+Comparison'
    },
    {
      id: 3,
      title: 'VPS Hosting Guide: Everything You Need to Know',
      slug: 'vps-hosting-guide',
      date: 'April 15, 2025',
      excerpt: 'Learn everything about VPS hosting, from how it works to whether it is right for your website...',
      image: 'https://via.placeholder.com/600x400?text=VPS+Hosting'
    },
    {
      id: 4,
      title: '10 Ways to Boost Your Website Speed with InterServer',
      slug: 'boost-website-speed',
      date: 'April 7, 2025',
      excerpt: 'Learn the most effective ways to optimize your website for maximum performance with InterServer...',
      image: 'https://via.placeholder.com/600x400?text=Website+Speed'
    },
    {
      id: 5,
      title: 'Web Hosting Security: Protecting Your Website from Threats',
      slug: 'web-hosting-security',
      date: 'March 31, 2025',
      excerpt: 'Discover how InterServer\'s security features protect your website from common threats and vulnerabilities...',
      image: 'https://via.placeholder.com/600x400?text=Hosting+Security'
    }
  ];

  return (
    <>
      <SEO 
        title="InterServer Hosting Blog - Web Hosting Tips, Guides & Resources" 
        description="Expert tips, guides and resources about web hosting, website security, and optimizing your online presence with InterServer."
        canonicalUrl="https://your-interserver-promo.com/blog"
      />
      
      <BlogPageContainer>
        <PageHeader>
          <h1>InterServer Hosting Blog</h1>
          <p>Expert guides, tips, and resources to help you get the most from your web hosting and build a successful online presence.</p>
        </PageHeader>
        
        <BlogGrid>
          {blogPosts.map(post => (
            <BlogCard key={post.id}>
              <BlogCardImage image={post.image} />
              <BlogCardContent>
                <span className="date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="read-more">Read More →</Link>
              </BlogCardContent>
            </BlogCard>
          ))}
        </BlogGrid>
        
        <CTAContainer>
          <h2>Ready to experience InterServer hosting?</h2>
          <p>Get started today with our price-lock guarantee and 30-day money-back guarantee.</p>
          <CTAButton text="Sign Up with InterServer" />
        </CTAContainer>
      </BlogPageContainer>
    </>
  );
};

export default BlogPage;