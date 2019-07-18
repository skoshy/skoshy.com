/* eslint-disable no-restricted-imports, @typescript-eslint/no-explicit-any */
import { FunctionComponent } from 'react';
import PT from 'prop-types';
import UT from 'utility-types';

export type InferPropsTypes<PT extends object, DP extends object> = UT.Assign<
  Partial<UT.Intersection<DP, PT>>,
  Required<PT.InferProps<UT.Diff<PT, DP>>>
>;

// export type InferPropTypes<
//   PropTypes,
//   DefaultProps = {},
//   Props = PT.InferProps<PropTypes>
// > = {
//   [Key in keyof Props]: Key extends keyof DefaultProps
//     ? Props[Key] | DefaultProps[Key]
//     : Props[Key];
// };

// We're disabling props type-checking with TypeScript because we're using PropTypes instead,
// and we use ESLint to check types at compile/static time
// export type FC<
//   PropTypes extends object,
//   DefaultProps extends object = {}
// > = FunctionComponent<InferPropsTypes<PropTypes, DefaultProps>>;

export type FC<PropsTypes> = FunctionComponent<PropsTypes>;
