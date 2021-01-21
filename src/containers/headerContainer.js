import React from 'react';
import { SIGN_IN, HOME } from '../constants/routes';
import Header from '../components/Header';
import logo from '../logo.svg';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
