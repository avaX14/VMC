import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import PublicRoute from 'containers/PublicRoute';
import WelcomePage from 'containers/HomePage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import UserProfilePage from 'containers/UserProfilePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import ResetPasswordPage from 'containers/ResetPasswordPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import {
  WELCOME,
  DASHBOARD,
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  USER_PROFILE,
  ABOUT,
  STRUCTURE,
  MEMBERS,
  PROJECTS
} from 'routes';
import HomePage from 'containers/HomePage';
import AboutPage from 'containers/AboutPage';
import StructurePage from 'containers/StructurePage';
import MembersPage from 'containers/MembersPage';
import ProjectsPage from 'containers/ProjectsPage';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute exact path={WELCOME} component={HomePage} />
      <PublicRoute exact path={ABOUT} component={AboutPage} />
      <PublicRoute exact path={STRUCTURE} component={StructurePage} />
      <PublicRoute exact path={MEMBERS} component={MembersPage} />
      <PublicRoute exact path={PROJECTS} component={ProjectsPage} />
      <PrivateRoute exact path={DASHBOARD} component={Dashboard} />
      <PrivateRoute exact path={USER_PROFILE} component={UserProfilePage} />
      <PublicRoute exact path={LOGIN} component={LoginPage} />
      <PublicRoute exact path={REGISTER} component={RegisterPage} />
      <PublicRoute
        exact
        path={FORGOT_PASSWORD}
        component={ForgotPasswordPage}
      />
      <PublicRoute exact path={RESET_PASSWORD} component={ResetPasswordPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
