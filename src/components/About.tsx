import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import profileImage from '../assets/images/프로필_데미안.jpg';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('philosophy');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-section');
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
    <section className={`about-section ${isVisible ? 'visible' : ''}`} id="about">
      <div className="container">
        <h2 className="section-title">소개</h2>
        
        <div className="about-content">
          <div className="profile-image-container">
            <img src={profileImage} alt="임정훈 프로필" className="profile-image" />
            <div className="image-overlay"></div>
          </div>
          
          <div className="about-tabs">
            <div className="tab-buttons">
              <button 
                className={`tab-button ${activeTab === 'philosophy' ? 'active' : ''}`}
                onClick={() => setActiveTab('philosophy')}
              >
                철학
              </button>
              <button 
                className={`tab-button ${activeTab === 'career' ? 'active' : ''}`}
                onClick={() => setActiveTab('career')}
              >
                경력
              </button>
              <button 
                className={`tab-button ${activeTab === 'identity' ? 'active' : ''}`}
                onClick={() => setActiveTab('identity')}
              >
                정체성
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'philosophy' && (
                <div className="tab-pane">
                  <h3>물과 바람 같은 삶</h3>
                  <p>
                    개인의 삶과 조직의 변화와 성장을 두드리는 Awakening Drummer로서, 
                    지식과 경험을 공유하고 연결하며, 함께 배우고, 익히고, 나누는 코치이자 
                    강사, 퍼실리테이터, 기획자, 디자이너로 활동하고 있습니다.
                  </p>
                  <p>
                    DX를 넘어 AX(AI Transformation) 시대에 디지털 기술이 조직의 구조와 협업 방식을 근본적으로 바꾸는 흐름 속에서, 
                    기술이 아닌 사람을 중심에 두고, 업무 방식과 소통, 관계에 대한 고민과 시도, 학습을 멈추지 않으며, 
                    기술을 실제 변화로 전환시키기 위해 계속 도전 중입니다.
                  </p>
                  <blockquote>
                    "소년이여, 야망을 가져라, 단지 인간이 갖추어야 할 모든 것을 성취하기 위해서..."
                    <cite>- 윌리엄 스미스 클라크</cite>
                  </blockquote>
                </div>
              )}
              
              {activeTab === 'career' && (
                <div className="tab-pane">
                  <h3>전문 경력</h3>
                  <div className="career-item">
                    <div className="career-title">희림건축 인사팀 교육담당자</div>
                    <div className="career-period">현재</div>
                    <p>15년 경력의 현직 기업 HRD 담당자로서 1,400명 대상 교육체계 수립 및 사람과 기술 연결 교육 디자인</p>
                  </div>
                  <div className="career-item">
                    <div className="career-title">AI & 디지털 & HRD 현업실무자</div>
                    <div className="career-period">전문 분야</div>
                    <p>심리학과 진성 리더십, 코칭과 퍼실리테이션을 토대로 지속 가능한 성장과 연결의 교육을 실천하며, 생산성과 창의성, 성과와 인간이 공존할 수 있는 AI 시스템을 디자인하고 있습니다.</p>
                  </div>
                  <div className="career-item">
                    <div className="career-title">다양한 커뮤니티 활동</div>
                    <div className="career-period">지속적 활동</div>
                    <p>다양한 커뮤니티 퍼실리테이션, Guide Run Project 등 교육 프로그램 운영, 마라톤 활동 및 러닝 커뮤니티 참여</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'identity' && (
                <div className="tab-pane">
                  <h3>Awakening Drummer</h3>
                  <div className="identity-grid">
                    <div className="identity-item">
                      <div className="identity-icon">
                        <i className="fas fa-water"></i>
                      </div>
                      <h4>물과 바람 같은 삶</h4>
                      <p>유연하고 자유로우면서도 깊이 있는 삶의 추구</p>
                    </div>
                    <div className="identity-item">
                      <div className="identity-icon">
                        <i className="fas fa-running"></i>
                      </div>
                      <h4>배움과 익힘의 마라토너</h4>
                      <p>지속적인 성장과 나눔의 가치 실천</p>
                    </div>
                    <div className="identity-item">
                      <div className="identity-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <h4>사람 중심의 기술</h4>
                      <p>기술이 아닌 사람을 중심에 두는 접근법</p>
                    </div>
                    <div className="identity-item">
                      <div className="identity-icon">
                        <i className="fas fa-link"></i>
                      </div>
                      <h4>지식과 경험의 연결</h4>
                      <p>함께 배우고, 익히고, 나누는 과정 중시</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
