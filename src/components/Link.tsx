import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import NextLink from 'next/link';
import { FC, InferPropsTypes } from 'src/utils/types';

export const Link = (() => {
  // + [edit] define propTypes and defaultProps
  const propTypes = {
    children: PT.node.isRequired,
    to: PT.string.isRequired,
  };
  const defaultProps = {};

  // - [don't edit] generate the TS types for this component
  type types = InferPropsTypes<typeof propTypes, typeof defaultProps>;

  // + [edit] define the component itself
  const Component: FC<types> = ({ children, to, ...other }) => {
    const internal = /^\/(?!\/)/.test(to);

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
      return (
        <NextLink href={to} {...other}>
          {children}
        </NextLink>
      );
    }
    return (
      <a href={to} {...other}>
        {children}
      </a>
    );
  };

  // - [don't edit] map the propTypes and defaultProps to the component
  Component.propTypes = propTypes;
  Component.defaultProps = defaultProps;

  // + [edit] create a styled version of the component
  const StyledComponent = styled<FC<types>>(Component)<types>`
    font-size: 1em;
    color: white;
    text-decoration: none;
  `;

  return StyledComponent;
})();
