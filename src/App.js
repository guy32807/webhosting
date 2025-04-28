import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost1 from './pages/Blog/BlogPost1';
import GlobalStyle from './components/GlobalStyle';
import Comparisons from './pages/Comparisons';

// Modern theme with updated color palette
const theme = {
  colors: {
    primary: '#3563E9', // Modern blue
    secondary: '#1E40AF', // Darker blue
    accent: '#06B6D4', // Vibrant teal accent
    background: '#F8FAFC', // Light gray background
    text: '#1E293B', // Dark slate
    light: '#F1F5F9', // Light gray for cards/sections
    white: '#FFFFFF',
    success: '#10B981', // Green
    warning: '#F59E0B', // Amber
    error: '#EF4444', // Red
    muted: '#64748B', // Slate gray for secondary text
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    monospace: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
};

// Create placeholder components for missing pages
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '50px 20px', textAlign: 'center' }}>
    <h1>{title} Page</h1>
    <p>This page is under construction.</p>
  </div>
);

// Placeholder components
const HostingReviews = () => <PlaceholderPage title="Hosting Reviews" />;

const HostingGuides = () => <PlaceholderPage title="Hosting Guides" />;
const Contact = () => <PlaceholderPage title="Contact" />;
const BlogPost2 = () => <PlaceholderPage title="Web Hosting Comparison Guide" />;
const BlogPost3 = () => <PlaceholderPage title="VPS Hosting Guide" />;
const BlogPost4 = () => <PlaceholderPage title="Website Speed Optimization" />;
const BlogPost5 = () => <PlaceholderPage title="Web Hosting Security" />;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HelmetProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hosting-reviews" element={<HostingReviews />} />
              <Route path="/comparisons" element={<Comparisons />} />
              <Route path="/hosting-guides" element={<HostingGuides />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/interserver-hosting-features" element={<BlogPost1 />} />
              <Route path="/blog/web-hosting-comparison" element={<BlogPost2 />} />
              <Route path="/blog/vps-hosting-guide" element={<BlogPost3 />} />
              <Route path="/blog/boost-website-speed" element={<BlogPost4 />} />
              <Route path="/blog/web-hosting-security" element={<BlogPost5 />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
