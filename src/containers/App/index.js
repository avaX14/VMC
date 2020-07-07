import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SnackbarProvider } from 'notistack';
import { useInjectSaga } from 'utils/injectSaga';
import Notifier from 'containers/Notifier';
import Routes from './Routes';
import { fetchAuthenticatedUser, logout } from './actions';
import { makeSelectToken, makeSelectUser } from './selectors';
import saga from './saga';
import AppBar from 'components/AppBar';
import Heading from '../../components/Heading/index';
import Topbar from '../../components/Heading/Topbar';
import Footer from '../../components/Footer/Footer';
import SideSlider from 'components/SideSlider/SideSlider';

const key = 'app';

function App() {
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  const token = useSelector(makeSelectToken());
  const user = useSelector(makeSelectUser());
  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchAuthenticatedUser());
    }
  }, [token, dispatch]);

  const renderLoadingIndicator = <div>Loading...</div>;

  return (
    <Fragment>
      {/* <LearningPlatform></LearningPlatform> */}
      <SideSlider></SideSlider>
      <Topbar></Topbar>
      <Heading></Heading>

      {token && !user ? (
        renderLoadingIndicator
      ) : (
        <>
          {user && <AppBar onLogout={handleLogout} />}
          <Routes />
        </>
      )}
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
