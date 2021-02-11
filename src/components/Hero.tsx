import React from 'react';
import { Paragraph, Heading, Link } from 'src/components/base';

export const Hero = () => {
  return (
    <section className="text-gray-600 body-font w-screen h-screen grid justify-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img alt="Me as an avatar" src="/static/me-waving.png" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <Heading type="h1">Howdy 👋</Heading>
          <Paragraph>
            {`I'm `}
            <abbr title="Pronounced STEFF-on">Stefan</abbr> (or Steve) Koshy
          </Paragraph>
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
            Full Stack Javascript with React or Vue preferred, but experienced
            in PHP and Golang as well
          </Paragraph>
          <Heading type="h4">Pardon the appearance</Heading>
          <Paragraph>This site is still under construction for now!</Paragraph>
        </div>
      </div>
    </section>
  );
};
