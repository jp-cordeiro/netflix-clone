import React from 'react';
import OptForm from '../components/OptForm';
import Feature from '../components/Feature';
import FaqsContainer from '../containers/faqsContainer';
import FooterContainer from '../containers/footerContainer';
import JumbotonContainer from '../containers/jumbotronContainer';
import HeaderContainer from '../containers/headerContainer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotonContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
