import React from 'react';
import classes from './Navbar.module.scss';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const { preference } = useSelector((state) => state.client);

  return (
    <>
      {preference && (
        <nav className={classes.Navbar}>
          <div className={classes.LogoContainer}>
            <img
              src={`http://localhost:8000/images/${preference.logo}`}
              alt="Logo"
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
