import React from 'react';
import styled from 'styled-components';
import { Paragraph, Heading, Link, Grid } from 'src/components/base';

const MainGrid = styled(Grid)`
  width: 80%;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @media (min-width: 700px) {
    grid-template-columns: 2fr 4fr;
  }
`;

export const Hero = () => {
  return (
    <section className="text-gray-600 body-font grid justify-center">
      <Grid
        style={{
          minHeight: 'calc(100vh - 74px)',
          minWidth: '100vw',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <MainGrid>
          <img
            className="max-w-full"
            alt="Me as an avatar"
            src="/static/me-waving.png"
          />
          <div className="">
            <Heading type="h1">Howdy 👋</Heading>
            <Paragraph>
              {`I'm `}
              <abbr title="Pronounced STEFF-on">Stefan</abbr> (or Steve) Koshy
            </Paragraph>
            <Paragraph>
              Working at {}
              <Link
                href="https://www.hingehealth.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Hinge Health
              </Link>
              , previously at {}
              <Link
                href="https://common.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Common
              </Link>
              and {}
              <Link
                href="https://nextjump.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Next Jump
              </Link>
              , currently residing in New York City
            </Paragraph>
            <Heading type="h4">Web Development is my passion</Heading>
            <Paragraph>
              Full Stack Javascript with React or Vue preferred, but experienced
              in PHP and Golang as well
            </Paragraph>
            <Heading type="h4">Pardon the appearance</Heading>
            <Paragraph>
              This site is still under construction for now!
            </Paragraph>
          </div>
        </MainGrid>
      </Grid>
    </section>
  );
};
