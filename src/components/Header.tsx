import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">Demian 임정훈</Link>
        </div>
        
        <div className={`nav-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>홈</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>소개</Link></li>
            <li><Link to="/activities" onClick={() => setMenuOpen(false)}>활동</Link></li>
            <li><Link to="/music" onClick={() => setMenuOpen(false)}>음악</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>연락처</Link></li>
          </ul>
        </nav>
        
        <div className="social-links">
          <a href="https://www.facebook.com/Rescuemyself7" target="_blank" rel="noopener noreferrer" aria-label="페이스북">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/demian_yim/" target="_blank" rel="noopener noreferrer" aria-label="인스타그램">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://blog.naver.com/inamoment" target="_blank" rel="noopener noreferrer" aria-label="블로그">
            <i className="fas fa-blog"></i>
          </a>
          <a href="https://www.linkedin.com/in/demian-yim-23ab981aa/" target="_blank" rel="noopener noreferrer" aria-label="링크드인">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        
        <div className="music-control">
          <button className="music-toggle" aria-label="배경 음악 재생/정지">
            <i className="fas fa-music"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
