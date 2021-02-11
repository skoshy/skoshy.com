import React from 'react';
import { css } from 'styled-components';
import { FC } from 'src/utils/types';
import { Text, Link } from 'src/components/base';

interface Types {
  siteTitle?: string;
}

const style = [
  css`
    align-items: center;
    background: rgb(43, 92, 144);
    /* border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; */
    color: white;
    display: flex;
    margin: 0;
    padding: 16px;
    width: 100%;
    top: 0;
    left: 0;

    a {
      color: inherit;
    }

    .link-list > * {
      padding: 0 8px;
    }
  `,
];

export const Header: FC<Types> = ({ siteTitle = process.env.SITE_TITLE }) => (
  <div className="" css={style}>
    <h1 style={{ flex: 1, margin: 0 }}>
      <Link href="/">
        <Text>{siteTitle}</Text>
      </Link>
    </h1>
    <div className="link-list">
      <Link href="https://linkedin.com/in/skoshy">
        <Text>LinkedIn</Text>
      </Link>
      <Link href="https://twitter.com/stekoshy">
        <Text>Twitter</Text>
      </Link>
      <Link href="https://github.com/skoshy">
        <Text>GitHub</Text>
      </Link>
    </div>
  </div>
);
