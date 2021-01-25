import React from 'react';
import { Header } from 'src/components/Header';
import { MainLayout } from 'src/layouts/Main';
import { Paragraph, Heading, Link } from 'src/components/base';
import { FC } from 'src/utils/types';

const Home: FC = () => {
  return (
    <MainLayout>
      <Header />
      <Heading>Under Construction</Heading>
      <Paragraph>
        Pardon the appearance, this site is still under construction!
      </Paragraph>
      <Heading>
        Howdy {}
        <span role="img" aria-label="smiley">
          😊
        </span>
      </Heading>
      <Heading>
        {`I'm `}
        <abbr title="Pronounced STEFF-on">Stefan</abbr> (or Steve) Koshy
      </Heading>
      <Paragraph>
        Working at {}
        <Link
          href="https://common.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Common
        </Link>
        , previously a {}
        <Link
          href="https://nextjump.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Next Jumper
        </Link>
        , currently residing in New York City
      </Paragraph>
      <Heading type="h4">Web Development is my passion</Heading>
      <Paragraph>
        Full Stack Javascript with React or Vue preferred, but experienced in
        PHP and Golang as well
      </Paragraph>
    </MainLayout>
  );
};

export default Home;
