import { reducer } from './reducer';

describe('Reducer Test', () => {
  it('can handles the coffee case', () => {
    const action = 'DRINK_COFFEE';
    const initialState = { coffees: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });

  it('can handles the eat snack case', () => {
    const action = 'EAT_SNACK';
    const initialState = { snacks: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snacks: 1 });
  });
});
