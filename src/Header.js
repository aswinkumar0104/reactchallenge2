import React from "react";

const Header = ({ headerItems, handleButtonClick }) => {
  return (
    <div className="header-content">
      {headerItems.map((item) => (
        <button
          key={item.id}
          value={item.id}
          url={item.url}
          className="button-style"
          onClick={async (e) => await handleButtonClick(e.target.value)}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
};

export default Header;
