import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import SplashPage from './components/splash/splashPage.jsx';
import LoginPage from './components/login-signup/LoginPage.jsx';
import SignupPage from './components/login-signup/SignupPage.jsx';
import LogoutPage from './components/login-signup/LogoutPage.jsx';
import requireAuth from './components/login-signup/RequireAuth.jsx';
import DashboardPage from './components/dashboard/DashboardPage.jsx';

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LoginPage} />
    <IndexRoute component={SplashPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/logout" component={LogoutPage} />
    <Route path="/dashboard" component={requireAuth(DashboardPage)} />
  </Route>
);
