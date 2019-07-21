import React from 'react';
import { MainLayout } from 'src/layouts/Main';
import { Header } from 'src/components/Header';
import { Paragraph, Heading, Div } from 'src/components/Base';
import { FC } from 'src/utils/types';
import { Link } from 'src/components/Link';
import { GlobalStyle } from 'src/themes/styles';

const Home: FC = () => {
  return (
    <MainLayout>
      <GlobalStyle />
      <Div className="alert alert-warning">
        <Header />
        <Heading>Under Construction</Heading>
        <Paragraph>
          Pardon the appearance, this site is still under construction!
        </Paragraph>
      </Div>
      <Heading>
        Howdy{' '}
        <span role="img" aria-label="smiley">
          😊
        </span>
      </Heading>
      <Heading>
        I&apos;m <abbr title="Pronounced STEHP-on">Stefan</abbr> (or Steve)
        Koshy
      </Heading>
      <Paragraph>
        Working at{' '}
        <Link
          href="https://common.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Common
        </Link>
        , previously a{' '}
        <Link
          href="https://nextjump.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Next Jumper
        </Link>
        , currently residing in New York City
      </Paragraph>
      <Heading>Web Development is my passion</Heading>
      <Paragraph>
        Full Stack Javascript with React or Vue preferred, but experienced in
        PHP and Golang as well
      </Paragraph>
    </MainLayout>
  );
};

export default Home;
