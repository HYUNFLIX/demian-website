import React, { useState, useEffect } from 'react';
import '../styles/Activities.css';

const Activities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 활동 데이터
  const activities = [
    {
      id: 1,
      title: 'Guide Run Project',
      category: 'education',
      date: '2024 - 현재',
      description: '다양한 커뮤니티 퍼실리테이션 및 교육 프로그램 운영',
      image: 'https://via.placeholder.com/400x300/93C5FD/1E3A8A?text=Guide+Run+Project'
    },
    {
      id: 2,
      title: '마라톤 활동',
      category: 'sports',
      date: '지속적 활동',
      description: '마라톤 활동 및 러닝 커뮤니티 참여, 체력 관리와 지속적인 도전',
      image: 'https://via.placeholder.com/400x300/93C5FD/1E3A8A?text=Marathon'
    },
    {
      id: 3,
      title: 'AI 시스템 디자인',
      category: 'tech',
      date: '2025',
      description: '생산성과 창의성, 성과와 인간이 공존하는 AI 시스템 개발',
      image: 'https://via.placeholder.com/400x300/93C5FD/1E3A8A?text=AI+System+Design'
    },
    {
      id: 4,
      title: '희림건축 교육 프로그램',
      category: 'education',
      date: '현재',
      description: '1,400명 대상 교육체계 수립 및 사람과 기술 연결 교육 디자인',
      image: 'https://via.placeholder.com/400x300/93C5FD/1E3A8A?text=Heerim+Education'
    },
    {
      id: 5,
      title: '전시 관람',
      category: 'arts',
      date: '지속적 활동',
      description: '다양한 전시 관람 및 예술적 영감 추구',
      image: 'https://via.placeholder.com/400x300/93C5FD/1E3A8A?text=Exhibition'
    },
    {
      id: 6,
      title: '음악 감상',
      category: 'arts',
      date: '지속적 활동',
      description: '클래식, 재즈, 록, 팝, 오페라 등 폭넓은 음악 감상',
      image: 'https://via.placeholder.com/400x300/93C5FD/1E3A8A?text=Music'
    }
  ];
  
  // 필터링된 활동 목록
  const filteredActivities = activeCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.activities-section');
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      
      // 요소가 화면에 보이는지 확인
      if (position.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시 확인
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`activities-section ${isVisible ? 'visible' : ''}`} id="activities">
      <div className="container">
        <h2 className="section-title">활동</h2>
        
        <div className="category-filter">
          <button 
            className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            전체
          </button>
          <button 
            className={`filter-button ${activeCategory === 'education' ? 'active' : ''}`}
            onClick={() => setActiveCategory('education')}
          >
            교육
          </button>
          <button 
            className={`filter-button ${activeCategory === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tech')}
          >
            기술
          </button>
          <button 
            className={`filter-button ${activeCategory === 'sports' ? 'active' : ''}`}
            onClick={() => setActiveCategory('sports')}
          >
            스포츠
          </button>
          <button 
            className={`filter-button ${activeCategory === 'arts' ? 'active' : ''}`}
            onClick={() => setActiveCategory('arts')}
          >
            예술
          </button>
        </div>
        
        <div className="activities-grid">
          {filteredActivities.map((activity, index) => (
            <div 
              className="activity-card" 
              key={activity.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
                <div className="activity-overlay">
                  <span className="activity-category">{getCategoryName(activity.category)}</span>
                </div>
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{activity.title}</h3>
                <div className="activity-date">{activity.date}</div>
                <p className="activity-description">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="activities-quote">
          <blockquote>
            "배움과 익힘, 가르침이 즐거운 마라토너로서 지속적인 성장과 나눔의 가치를 실천합니다."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

// 카테고리 이름 변환 함수
const getCategoryName = (category: string): string => {
  switch (category) {
    case 'education':
      return '교육';
    case 'tech':
      return '기술';
    case 'sports':
      return '스포츠';
    case 'arts':
      return '예술';
    default:
      return '기타';
  }
};

export default Activities;
