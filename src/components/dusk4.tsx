import { createActionCreators, createReducerFunction } from 'immer-reducer';
import { MyImmerReducer } from './dusk3';

const fragments = {
  user: {
    firstName: '',
    lastName: '',
  },
};

const initialState = {
  otherStuff: '',
  ...fragments.user,
};

type State = typeof initialState;

export const ActionCreators = createActionCreators(MyImmerReducer);
export const reducerFunction = createReducerFunction(
  MyImmerReducer,
  initialState
);
