import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

interface Props {
  children: React.ReactNode;
  to: string;
  activeClassName: string;
  partiallyActive: boolean;
}

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
export const Link = styled(
  ({
    children,
    to,
    activeClassName,
    partiallyActive,
    ...other
  }): React.ReactNode => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to);

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
      return (
        <NextLink
          to={to}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          {...other}
        >
          {children}
        </NextLink>
      );
    }
    return (
      <a href={to} {...other}>
        {children}
      </a>
    );
  }
)`
  font-size: 1em;
  color: white;
  text-decoration: none;
`;
