/* eslint-disable no-restricted-imports, @typescript-eslint/no-explicit-any */
import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

export type InferPropTypes<
  PropTypes,
  DefaultProps = {},
  Props = PropTypes.InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key];
};

// We're disabling props type-checking with TypeScript because we're using PropTypes instead,
// and we use ESLint to check types at compile/static time
export type FC<PropTypes, DefaultProps = {}> = FunctionComponent<
  InferPropTypes<PropTypes>
>;
