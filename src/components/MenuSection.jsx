import React from 'react';

function MenuSection() {
  return (
    <div className="menu-section" style={{ backgroundColor: '#FFE2B0' }}>
      <nav>
        <ul>
          <li><a href="#about">О НАС</a></li>
          <li><a href="#news">НОВОСТИ</a></li>
          <li><a href="#menu">МЕНЮ</a></li>
          <li><a href="#contact">КОНТАКТЫ</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuSection;
