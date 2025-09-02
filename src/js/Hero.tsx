import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  const handleProjects = () => {
    alert('Переход к проектам...');
  };

  const handleQuestion = () => {
    const question = prompt('Задайте ваш вопрос:');
    if (question) {
      alert('Ваш вопрос отправлен!');
    }
  };

  const handleVideo = () => {
    alert('Открывается видео о компании...');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            СТРОИТЕЛЬНАЯ КОМПАНИЯ
          </h1>
          <h2 className="hero-subtitle">WIN</h2>
          <p className="hero-description">
            Мы строим дома, коттеджные поселки и таунхаусы в Казани
          </p>
          
          <div className="hero-buttons">
            <button className="hero-btn projects-btn" onClick={handleProjects}>
              Подробнее о проектах
            </button>
            <button className="hero-btn question-btn" onClick={handleQuestion}>
              Задать вопрос
            </button>
          </div>
        </div>

        <div className="hero-video">
          <button className="video-btn" onClick={handleVideo}>
            СМОТРЕТЬ ВИДЕО
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;