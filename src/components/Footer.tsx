import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Demian 임정훈</h3>
            <p>배움과 익힘, 가르침이 즐거운 마라토너</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>바로가기</h4>
              <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/about">소개</a></li>
                <li><a href="/activities">활동</a></li>
                <li><a href="/contact">연락처</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>SNS</h4>
              <ul>
                <li><a href="https://www.facebook.com/Rescuemyself7" target="_blank" rel="noopener noreferrer">페이스북</a></li>
                <li><a href="https://www.instagram.com/demian_yim/" target="_blank" rel="noopener noreferrer">인스타그램</a></li>
                <li><a href="https://blog.naver.com/inamoment" target="_blank" rel="noopener noreferrer">블로그</a></li>
                <li><a href="https://www.linkedin.com/in/demian-yim-23ab981aa/" target="_blank" rel="noopener noreferrer">링크드인</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>활동</h4>
              <ul>
                <li><a href="/activities">교육 프로그램</a></li>
                <li><a href="/activities">마라톤</a></li>
                <li><a href="/activities">AI 시스템 디자인</a></li>
                <li><a href="/activities">예술 활동</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Demian 임정훈. All Rights Reserved.</p>
          <div className="footer-social">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
