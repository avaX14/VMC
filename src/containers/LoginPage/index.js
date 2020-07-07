import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectIsSocialAuthPending } from 'containers/SocialAuth/selectors';
import { makeSelectIsLoginPending } from './selectors';
import { login } from './actions';
import SocialAuth from 'containers/SocialAuth';
import LoginForm from './LoginForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { REGISTER, FORGOT_PASSWORD, LOGIN } from 'routes';
import translate from 'i18n/translate';
import RegisterForm from 'containers/RegisterPage/RegisterForm';

const key = 'login';

function LoginPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [login, setLogin] = useState(true);
  const dispatch = useDispatch();
  const isLoginPending = useSelector(makeSelectIsLoginPending());
  const isSocialAuthPending = useSelector(makeSelectIsSocialAuthPending());
  const submitLoginForm = useCallback((...args) => dispatch(login(...args)), [
    dispatch
  ]);

  const { formatMessage } = useIntl();

  const renderPendingIndicator = <div>Please wait...</div>;

  return (
    <div>
      {login ? (
        <div className="login-panel">
          <LoginForm onSubmit={submitLoginForm} isPending={isLoginPending} />
          <Link to={FORGOT_PASSWORD}></Link>
          <br />
          <label
            className="register-btn text-uppercase"
            onClick={() => {
              setLogin(false);
            }}
          >
            {translate('register')}
          </label>
        </div>
      ) : (
        <div className="register-panel">
          <RegisterForm onSubmit={submitLoginForm} isPending={isLoginPending} />
          <Link to={FORGOT_PASSWORD}></Link>
          <label
            className="login-btn text-uppercase"
            onClick={() => {
              setLogin(true);
            }}
          >
            {translate('login')}
          </label>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
