import React from 'react';
import './Header.css';

const Header = ({ pendingCount }) => {
  return (
    <div className="header">
      <h1 className="header-title">My Todo List</h1>
      <div className="pending-badge">
        {pendingCount} Pending
      </div>
    </div>
  );
};

export default Header;