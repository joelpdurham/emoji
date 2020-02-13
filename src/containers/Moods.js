import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { reducer } from '../reducers/reducer';
import { getFace } from '../selectors/faceSelector';
import { getActions } from '../actions/actions';

export const Moods = () => {
  const [state, dispatch] = useReducer(reducer, { 
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
    potions: 0
  });

  const controlActions = getActions(state);
  const face = getFace(state);

  return (
    <>
      <Controls actions={controlActions} handleSelection={dispatch} />
      <Face emoji={face} />
    </>
  );
};
