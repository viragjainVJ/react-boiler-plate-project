import React from 'react';
import intl from 'react-intl-universal';
import Login from '../../../components/login/Login';

const LoginPage = ({ authToken, validateAuth, fetchUserActions, loginUser }) => (
  <div className={'justify-content-center'}>
    {authToken && validateAuth({ redirectToHome: true }) && <h4> {intl.get('app.loading')}</h4>}
    {!authToken && validateAuth({ redirectToHome: true }) && (
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
        <Login authToken={authToken} fetchUserActions={fetchUserActions} loginUser={loginUser} />
      </div>
    )}
  </div>
);

export default LoginPage;
