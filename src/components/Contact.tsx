import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import kakaoQR from '../assets/images/KakaoTalk_QR_임정훈_demianyim.jpg';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    attachment: null as File | null
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [qrEnlarged, setQrEnlarged] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.contact-section');
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachment: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 간단한 유효성 검사
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '필수 항목을 모두 입력해주세요.'
      });
      return;
    }
    
    // 실제 구현 시에는 서버로 데이터 전송 로직 추가
    // 여기서는 성공 시뮬레이션
    setFormStatus({
      submitted: true,
      success: true,
      message: '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.'
    });
    
    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      attachment: null
    });
    
    if (formRef.current) {
      formRef.current.reset();
    }
    
    // 3초 후 상태 메시지 초기화
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };
  
  const toggleQrEnlarged = () => {
    setQrEnlarged(!qrEnlarged);
  };
  
  const copyEmail = () => {
    navigator.clipboard.writeText('example@domain.com').then(() => {
      alert('이메일 주소가 복사되었습니다.');
    });
  };

  return (
    <section className={`contact-section ${isVisible ? 'visible' : ''}`} id="contact">
      <div className="container">
        <h2 className="section-title">연락처</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>위치</h3>
              <p>서울특별시</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>이메일</h3>
              <p>example@domain.com</p>
              <button className="copy-button" onClick={copyEmail}>
                <i className="fas fa-copy"></i> 복사
              </button>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-comment"></i>
              </div>
              <h3>카카오톡</h3>
              <div className="qr-container">
                <img 
                  src={kakaoQR} 
                  alt="카카오톡 QR 코드" 
                  className="kakao-qr" 
                  onClick={toggleQrEnlarged}
                />
                <p>QR 코드를 스캔하세요</p>
              </div>
            </div>
            
            <div className="social-links-large">
              <h3>SNS</h3>
              <div className="social-icons">
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
          
          <div className="contact-form-container">
            <h3>비공개 메시지</h3>
            <p className="form-description">
              교육, 강의, 스터디, 코칭 등에 관한 문의나 개인적인 메시지를 남겨주세요.
            </p>
            
            {formStatus.submitted && (
              <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group">
                <label htmlFor="name">이름 *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">이메일 *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">연락처</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="010-0000-0000" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">제목 *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">메시지 내용 *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="attachment">첨부 파일 (선택사항, 최대 5MB)</label>
                <input 
                  type="file" 
                  id="attachment" 
                  name="attachment" 
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" 
                />
              </div>
              
              <button type="submit" className="submit-button">
                <span className="button-text">메시지 보내기</span>
                <span className="button-icon"><i className="fas fa-paper-plane"></i></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {qrEnlarged && (
        <div className="qr-modal" onClick={toggleQrEnlarged}>
          <div className="qr-modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-modal" onClick={toggleQrEnlarged}>&times;</span>
            <img src={kakaoQR} alt="카카오톡 QR 코드 확대" />
            <p>스마트폰으로 QR 코드를 스캔하여 카카오톡으로 연락하세요.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
