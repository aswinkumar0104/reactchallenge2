import React from "react";

const Header = ({ headerItems, SetDefaultPage, defaultPage }) => {
  return (
    <div className="header-content">
      {headerItems.map((item) => (
        <button
          key={item.id}
          value={item.value}
          className="button-style"
          style={
            defaultPage === item.value
              ? { background: "black", color: "white" }
              : null
          }
          onClick={(e) => SetDefaultPage(e.target.value)}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
};

export default Header;
