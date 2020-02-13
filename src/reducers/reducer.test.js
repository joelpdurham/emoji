import { reducer } from './reducer';

describe('Reducer Test', () => {
  it('can handle the coffee case', () => {
    const action = 'DRINK_COFFEE';
    const initialState = { coffees: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });

  it('can handle the eat snack case', () => {
    const action = 'EAT_SNACK';
    const initialState = { snacks: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snacks: 1 });
  });

  it('can handle the take nap case', () => {
    const action = 'TAKE_NAP';
    const initialState = { naps: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ naps: 1 });
  });

  it('can handle the study case', () => {
    const action = 'STUDY';
    const initialState = { studies: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ studies: 1 });
  });

  it('can handle the potion case', () => {
    const action = 'DRINK_POTION';
    const initialState = { potions: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ potions: 1 });
  });

  it('can handle an unrecognized action', () => {
    const action = 'POOP';
    const initialState = { studies: 1, coffees: 5, naps: 3 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ studies: 1, coffees: 5, naps: 3 });
  });
});
