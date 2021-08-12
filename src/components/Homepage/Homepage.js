import React from 'react';
import classes from './Homepage.module.scss';

import { useSelector } from 'react-redux';

const Homepage = () => {
  const { preference } = useSelector((state) => state.client);
  const { isLoggedIn, user } = useSelector((state) => state.user);
  return (
    <div className={classes.Homepage}>
      {!isLoggedIn ? (
        <h1>Login to see your account details</h1>
      ) : (
        <>
          <h1>
            Welcome back, <span className={classes.Username}>{user.name}</span>
          </h1>
          <div className={classes.UserDetails}>
            <h2>You're details from our record</h2>
            <div className={classes.Group}>
              <strong>name: </strong>
              <p>{user.name}</p>
            </div>
            <div className={classes.Group}>
              <strong>email: </strong>
              <p>{user.email}</p>
            </div>
            <div className={classes.Group}>
              <strong>{preference.usernameAs}: </strong>
              <p>{user.username}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
