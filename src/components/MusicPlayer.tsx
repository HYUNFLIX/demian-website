import React, { useState, useEffect, useRef } from 'react';
import '../styles/MusicPlayer.css';

interface MusicPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, togglePlay }) => {
  const [currentSong, setCurrentSong] = useState({
    title: '물과 바람의 노래',
    artist: 'Playlist',
    index: 0
  });
  const [volume, setVolume] = useState(50);
  const [expanded, setExpanded] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  
  // YouTube IFrame API 로드
  useEffect(() => {
    // YouTube API 스크립트 로드
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // 플레이어 초기화 함수는 전역 스코프에 있어야 함
    window.onYouTubeIframeAPIReady = initPlayer;
    
    return () => {
      // 컴포넌트 언마운트 시 전역 함수 정리
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);
  
  // 플레이어 초기화
  const initPlayer = () => {
    if (!window.YT) return;
    
    // @ts-ignore - YT 타입 정의가 없을 수 있음
    new window.YT.Player('youtube-player', {
      height: '0',
      width: '0',
      playerVars: {
        'playlist': 'PLcaHoylU0Ow8B9qectHwPtm-QbN6GjX2z',
        'autoplay': 0,
        'mute': 1,
        'loop': 1,
        'controls': 0,
        'showinfo': 0,
        'rel': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };
  
  // 플레이어 준비 완료 시 실행
  const onPlayerReady = (event: any) => {
    // 볼륨 설정
    event.target.setVolume(volume);
    
    // 자동 재생 설정 (사용자 상호작용 필요할 수 있음)
    if (isPlaying) {
      event.target.playVideo();
    }
  };
  
  // 플레이어 상태 변경 시 실행
  const onPlayerStateChange = (event: any) => {
    // 재생 중인 곡 정보 업데이트
    if (event.data === window.YT.PlayerState.PLAYING) {
      const playerInstance = event.target;
      const videoData = playerInstance.getVideoData();
      
      setCurrentSong({
        title: videoData.title || '알 수 없는 제목',
        artist: videoData.author || 'Demian Yim',
        index: playerInstance.getPlaylistIndex()
      });
    }
    
    // 재생 종료 시 다음 곡 재생
    if (event.data === window.YT.PlayerState.ENDED) {
      event.target.playVideo();
    }
  };
  
  // 볼륨 변경 핸들러
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    
    // YouTube 플레이어 볼륨 설정
    const playerInstance = (window as any).player;
    if (playerInstance && typeof playerInstance.setVolume === 'function') {
      playerInstance.setVolume(newVolume);
    }
  };
  
  // 플레이어 확장/축소 토글
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // 다음 곡 재생
  const playNext = () => {
    const playerInstance = (window as any).player;
    if (playerInstance && typeof playerInstance.nextVideo === 'function') {
      playerInstance.nextVideo();
    }
  };
  
  // 이전 곡 재생
  const playPrevious = () => {
    const playerInstance = (window as any).player;
    if (playerInstance && typeof playerInstance.previousVideo === 'function') {
      playerInstance.previousVideo();
    }
  };
  
  return (
    <div className={`music-player ${expanded ? 'expanded' : ''}`} ref={playerRef}>
      <div id="youtube-player"></div>
      
      <div className="player-toggle" onClick={toggleExpand}>
        <i className={`fas ${expanded ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </div>
      
      <div className="player-content">
        <div className="song-info">
          <div className="song-title">{currentSong.title}</div>
          <div className="song-artist">{currentSong.artist}</div>
        </div>
        
        <div className="player-controls">
          <button className="control-button" onClick={playPrevious} aria-label="이전 곡">
            <i className="fas fa-step-backward"></i>
          </button>
          
          <button className="control-button play-button" onClick={togglePlay} aria-label={isPlaying ? '일시정지' : '재생'}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          
          <button className="control-button" onClick={playNext} aria-label="다음 곡">
            <i className="fas fa-step-forward"></i>
          </button>
        </div>
        
        <div className="volume-control">
          <i className="fas fa-volume-down"></i>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume} 
            onChange={handleVolumeChange} 
            className="volume-slider"
            aria-label="볼륨 조절"
          />
          <i className="fas fa-volume-up"></i>
        </div>
        
        <div className="playlist-info">
          <span>물과 바람의 노래 플레이리스트</span>
          <a 
            href="https://youtube.com/playlist?list=PLcaHoylU0Ow8B9qectHwPtm-QbN6GjX2z" 
            target="_blank" 
            rel="noopener noreferrer"
            className="playlist-link"
          >
            전체 목록 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
