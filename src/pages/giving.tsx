import React from 'react';
import { Header } from 'src/components/Header';
import { MainLayout } from 'src/layouts/Main';
import { Paragraph, Heading, Link } from 'src/components/base';
import { FC } from 'src/utils/types';
import { Hero } from 'src/components/Hero';

const Home: FC = () => {
  return (
    <iframe
      style={{ width: '100vw', height: '100vh' }}
      src="https://sk-donation-links.glitch.me"
    ></iframe>
  );
};

export default Home;
