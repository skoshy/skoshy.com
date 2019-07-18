import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import { FC, InferPropsTypes } from 'src/utils/types';
import { Link } from './Link';

export const Button = (() => {
  // + [edit] define propTypes and defaultProps
  const propTypes = {
    to: PT.any.isRequired,
    children: PT.node.isRequired,
    // color: PT.string.isRequired,
    // blah: PT.string,
  };
  const defaultProps = {
    // blah: '',
  };

  // - [don't edit] generate the TS types for this component
  type types = InferPropsTypes<typeof propTypes, typeof defaultProps>;

  // + [edit] define the component itself
  const Component: FC<types> = ({ children, to, ...props }) => (
    <Link to={to} {...props}>
      {children}
    </Link>
  );

  // - [don't edit] map the propTypes and defaultProps to the component
  Component.propTypes = propTypes;
  Component.defaultProps = defaultProps;

  // + [edit] create a styled version of the component
  const StyledComponent = styled(Component)<types>`
    display: inline-block;
    text-align: center;
    border-radius: 1em;
    padding: 0.8em;
    border: 2px solid white;
    margin: 0 0.5em;
  `;

  return StyledComponent;
})();

Button.displayName = 'Button';
