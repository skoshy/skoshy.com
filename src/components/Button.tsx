import React from 'react';
import { css } from 'styled-components';
import { FC } from 'src/utils/types';
import { Link } from './Link';

interface Types {
  to: string;
}

// + [edit] define the component itself
export const Button: FC<Types> = ({ children, to, ...props }) => {
  const style = css`
    border: 2px solid white;
    border-radius: 1em;
    display: inline-block;
    margin: 0 0.5em;
    padding: 0.8em;
    text-align: center;
  `;

  return (
    <Link css={style} to={to} {...props}>
      {children}
    </Link>
  );
};
