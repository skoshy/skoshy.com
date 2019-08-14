import React from 'react';
import { useImmerReducer } from 'use-immer';
import { ImmerReducer } from 'immer-reducer';
import { DeepPartial } from 'utility-types';

const initialState = { count: 0 };

function reducer(draft, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return void draft.count++;
    case 'decrement':
      return void draft.count--;
  }
}

function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

export class MyImmerReducer extends ImmerReducer<State> {
  public setFirstName(firstName: string): void {
    this.draftState.user.firstName = firstName;
  }

  public setLastName(lastName: string): void {
    this.draftState.user.lastName = lastName;
  }

  public reset(initialState): void {
    Object.keys(this.draftState).forEach(key => {});
  }
}
