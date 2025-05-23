import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 페이지 로딩 시뮬레이션
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h1>Demian 임정훈</h1>
          <div className="loading-bar">
            <div className="loading-progress" />
          </div>
          <p>물과 바람의 노래를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Activities />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route
            path="/music"
            element={<div className="music-page">음악 페이지 준비 중</div>}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <MusicPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
      <Footer />
    </div>
  );
};

export default App;
