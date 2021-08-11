import React from 'react';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.LogoContainer}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uzasBNwxum5G7YTfZZAFEQHaEK%26pid%3DApi&f=1"
          alt="Logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
