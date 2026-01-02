import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, X } from 'lucide-react';

const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
`;

const SearchContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 15px;
  font-size: 18px;
  margin-bottom: 20px;
  
  &:focus {
    outline: none;
    border-color: #1e293b;
  }
`;

const SearchResults = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const SearchResult = styled.div`
  padding: 15px;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #f8fafc;
  }
  
  h4 {
    color: #1e293b;
    margin-bottom: 5px;
  }
  
  p {
    color: #64748b;
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
`;

const SiteSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchData = [
    { title: 'OnTech AI - Artificial Intelligence Platform', url: '/products', type: 'Product' },
    { title: 'About OnTech - Company Information', url: '/about', type: 'Page' },
    { title: 'Careers at OnTech', url: '/careers', type: 'Page' },
    { title: 'OnTech Cloud Services', url: '/products', type: 'Product' },
    { title: 'Contact OnTech Support', url: '/contact', type: 'Page' },
    { title: 'OnTech News and Updates', url: '/news', type: 'News' },
    { title: 'Company Initiatives and Values', url: '/company', type: 'Page' }
  ];

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    if (searchQuery.length > 2) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (url) => {
    window.location.href = url;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <SearchOverlay onClick={onClose}>
      <SearchContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <Search size={24} color="#64748b" />
          <h2 style={{ color: '#1e293b', margin: 0 }}>Search OnTech</h2>
        </div>
        
        <SearchInput
          type="text"
          placeholder="Search products, pages, and content..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          autoFocus
        />
        
        <SearchResults>
          {results.map((result, index) => (
            <SearchResult key={index} onClick={() => handleResultClick(result.url)}>
              <h4>{result.title}</h4>
              <p>{result.type} • {result.url}</p>
            </SearchResult>
          ))}
          {query.length > 2 && results.length === 0 && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>
              No results found for "{query}"
            </div>
          )}
        </SearchResults>
      </SearchContainer>
    </SearchOverlay>
  );
};

export default SiteSearch;