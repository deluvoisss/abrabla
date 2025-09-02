import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu.tsx';
import '../css/Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const projectsItems = [
    "Изумрудный Village",
    "IQ CLUB", 
    "Усады",
    "Зимняя горка",
    "Константиновка"
  ];

  const housesItems = [
    "Одноэтажные",
    "Двухэтажные",
    "Таунхаусы",
    "Все дома"
  ];

  const companyItems = [
    "Команда",
    "СМИ о нас",
    "Новости"
  ];

  const handleCallBack = () => {
    alert('Заказ звонка принят! Мы скоро свяжемся с вами.');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <a href="#!" className="nav-logo">Главная ПК</a>
          
          <div className="nav-menu">
            <DropdownMenu 
              title="Наши проекты ▼"
              items={projectsItems}
              isActive={activeDropdown === 'projects'}
              onToggle={() => setActiveDropdown(activeDropdown === 'projects' ? null : 'projects')}
            />
            
            <DropdownMenu 
              title="Дома ▼"
              items={housesItems}
              isActive={activeDropdown === 'houses'}
              onToggle={() => setActiveDropdown(activeDropdown === 'houses' ? null : 'houses')}
            />
            
            <a href="#!" className="nav-item">Ипотека</a>
            
            <DropdownMenu 
              title="О компании ▼"
              items={companyItems}
              isActive={activeDropdown === 'company'}
              onToggle={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
            />
            
            <a href="#!" className="nav-item">Контакты</a>
          </div>
        </div>

        <div className="nav-right">
          <a href="tel:+79625552525" className="nav-phone">
            +7 (962) 555-25-25
          </a>
          <button className="nav-callback" onClick={handleCallBack}>
            Заказать звонок
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;