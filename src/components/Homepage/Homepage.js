import React, { useState } from 'react';
import classes from './Homepage.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/index';

const Homepage = ({ history }) => {
  const dispatch = useDispatch();

  const [nextClientId, setNextClientId] = useState('');

  const { preference } = useSelector((state) => state.client);
  const { isLoggedIn, user } = useSelector((state) => state.user);

  const navigateToLogin = () => {
    dispatch(logoutUser());
    history.push(`/app/login/${nextClientId}`);
  };

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
          <form
            className={classes.NextClientNavigator}
            onSubmit={navigateToLogin}
          >
            <label htmlFor="nextClientId">/app/login/</label>
            <input
              id="nextClientId"
              type="text"
              value={nextClientId}
              onChange={(e) => setNextClientId(e.target.value)}
            />
            <button type="submit">go</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Homepage;
