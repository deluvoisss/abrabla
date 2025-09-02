import React from 'react';
import '../css/DropdownMenu.css';

const DropdownMenu = ({ title, items, isActive, onToggle }) => {
  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={onToggle}>
        {title}
      </button>
      {isActive && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <a key={index} href="#!" className="dropdown-item">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;