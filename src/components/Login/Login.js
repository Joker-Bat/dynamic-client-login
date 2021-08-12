import React, { useState, useEffect } from 'react';
import classes from './Login.module.scss';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { useParams } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchClientPreference, loginUser } from '../../store/actions';

/**
 * Main Component
 */

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { clientId } = useParams();
  const { preference, error, loading } = useSelector((state) => state.client);

  const {
    error: loginError,
    loading: loginLoading,
    isLoggedIn,
  } = useSelector((state) => state.user);

  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/app/home');
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    dispatch(fetchClientPreference(clientId));
  }, [dispatch, clientId]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginLoading) return;
    dispatch(loginUser(usernameValue, passwordValue, clientId));
  };

  return (
    <>
      <div className={classes.FormContainer}>
        {loginError && <h1 className={classes.Error}>{loginError}</h1>}
        {error && <h1 className={classes.Error}>{error}</h1>}
        {loading && <div className={classes.Loading}></div>}
        {preference && (
          <form className={classes.Form} onSubmit={submitHandler}>
            <h1>{preference.signinAs}</h1>
            <div className={classes.InputGroup}>
              <input
                id="username"
                type="text"
                placeholder={preference.usernameAs}
                value={usernameValue}
                onChange={(e) => setUsernameValue(e.target.value)}
                autoComplete="username"
                required
              />
              <label htmlFor="username">{preference.usernameAs}</label>
            </div>
            <div className={classes.InputGroup}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={preference.passwordAs}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                autoComplete="current-password"
                required
              />
              <label htmlFor="password">{preference.passwordAs}</label>
              <span
                className={classes.Icon}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <button
              type="submit"
              className={loginLoading ? classes.Disable : ''}
            >
              {loginLoading ? (
                <span className={classes.ButtonLoader}></span>
              ) : (
                'submit'
              )}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
