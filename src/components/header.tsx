import React from 'react';
import PT from 'prop-types';
import FlexContainer from 'react-styled-flexbox';
import { FC } from 'src/utils/types';
import { Link } from './Link';
import { Button } from './Button';

const propTypes = {
  siteTitle: PT.string,
};

const defaultProps = {
  siteTitle: '',
};

export const Header: FC<typeof propTypes> = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <FlexContainer>
        <h1 style={{ flex: 1, margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <Button to="/page-2">hi</Button>
        <Button to="https://google.com">external</Button>
      </FlexContainer>
    </div>
  </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
