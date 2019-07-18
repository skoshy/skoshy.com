import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import { FC } from 'src/utils/types';
import { Link } from './Link';

export const Button = (() => {
  // - define propTypes and defaultProps
  const propTypes = {
    to: PT.node.isRequired,
    children: PT.node.isRequired,
    color: PT.string.isRequired,
    blah: PT.string,
  };
  const defaultProps = {
    blah: '',
  };

  // - define the component itself
  const component: FC<typeof propTypes> = ({ children, color, ...props }) => (
    <Link {...props}>
      {children} {color}
    </Link>
  );

  // - map the propTypes and defaultProps to the component
  component.propTypes = propTypes;
  component.defaultProps = defaultProps;

  // - create a styled version of the component
  const styledComponent = styled<FC<typeof propTypes>>(component)`
    display: inline-block;
    text-align: center;
    border-radius: 1em;
    padding: 0.8em;
    border: 2px solid white;
    margin: 0 0.5em;
  `;

  return styledComponent;
})();
