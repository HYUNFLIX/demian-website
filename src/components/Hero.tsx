import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      // 마우스 위치에 따른 물결 효과 계산
      const moveX = (clientX - width / 2) / 50;
      const moveY = (clientY - height / 2) / 50;
      
      // CSS 변수로 마우스 움직임 전달
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`} ref={heroRef}>
      <div className="hero-background">
        <div className="wave-effect"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Demian 임정훈</span>
          <span className="title-line">코치 & 디자이너 & 강사</span>
        </h1>
        
        <p className="hero-subtitle">
          개인의 삶과 조직의 변화와 성장을 두드리는 Awakening Drummer
        </p>
        
        <div className="hero-description">
          <p>
            지식과 경험을 공유하고 연결하며, 함께 배우고, 익히고, 나누는 여정
          </p>
        </div>
        
        <div className="scroll-indicator">
          <span>스크롤하여 더 알아보기</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
