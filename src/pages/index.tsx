import React from 'react';
import { Header } from 'src/components/Header';
import { MainLayout } from 'src/layouts/Main';
import { Paragraph, Heading, Link } from 'src/components/base';
import { FC } from 'src/utils/types';
import { Hero } from 'src/components/Hero';

const Home: FC = () => {
  return (
    <MainLayout>
      <Header />
      <Hero />
    </MainLayout>
  );
};

export default Home;
