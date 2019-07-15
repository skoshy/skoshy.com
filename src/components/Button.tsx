import React from 'react';
import styled from 'styled-components';
import { Link } from './Link';

export const Button = styled(
  ({ children, ...props }): JSX.Element => <Link {...props}>{children}</Link>
)`
  display: inline-block;
  text-align: center;
  border-radius: 1em;
  padding: 0.8em;
  border: 2px solid white;
  margin: 0 0.5em;
`;
