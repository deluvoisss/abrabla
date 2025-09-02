import React from 'react';
import '../css/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Изумрудный Village",
      image: "/api/placeholder/300/200",
      description: "Элитный коттеджный поселок"
    },
    {
      name: "IQ CLUB",
      image: "/api/placeholder/300/200", 
      description: "Умные дома премиум-класса"
    },
    {
      name: "Усады",
      image: "/api/placeholder/300/200",
      description: "Семейный комплекс таунхаусов"
    },
    {
      name: "Зимняя горка",
      image: "/api/placeholder/300/200",
      description: "Посёлок у зимнего курорта"
    },
    {
      name: "Константиновка",
      image: "/api/placeholder/300/200",
      description: "Классические загородные дома"
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>Наши проекты</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <button className="project-btn">Подробнее</button>
                </div>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;