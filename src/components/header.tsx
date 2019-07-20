import React from 'react';
import { css } from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import { FC } from 'src/utils/types';
import { Link } from './Link';
import { Button } from './Button';

interface Types {
  siteTitle?: string;
}

const style = css`
  background: rebeccapurple;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  max-width: 960px;
`;

export const Header: FC<Types> = ({ siteTitle = '' }) => (
  <div css={style}>
    <FlexContainer>
      <h1 style={{ flex: 1, margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Button to="/page-2">hi</Button>
      <Button to="https://google.com">external</Button>
    </FlexContainer>
  </div>
);
