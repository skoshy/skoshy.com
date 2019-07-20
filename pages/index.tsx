import React from 'react';
import { MainLayout } from 'src/layouts/Main';
import { Header } from 'src/components/Header';
import { Paragraph, Heading, Div } from 'src/components/Base';
import { FC } from 'src/utils/types';

const Home: FC = () => {
  return (
    <MainLayout>
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
        <a href="https://common.com" rel="noopener noreferrer" target="_blank">
          Common
        </a>
        , previously a{' '}
        <a
          href="https://nextjump.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Next Jumper
        </a>
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
