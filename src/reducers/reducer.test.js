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

  it('can handles the take nap case', () => {
    const action = 'TAKE_NAP';
    const initialState = { naps: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ naps: 1 });
  });
});
