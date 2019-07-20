/* eslint-disable no-restricted-imports, @typescript-eslint/no-explicit-any */
import { FunctionComponent } from 'react';
import PT from 'prop-types';
import UT from 'utility-types';

export type InferPropsTypes<PT extends object, DP extends object> = UT.Assign<
  Partial<UT.Intersection<DP, PT>>,
  Required<PT.InferProps<UT.Diff<PT, DP>>>
>;

export type FC<PropsTypes = {}> = FunctionComponent<PropsTypes>;
