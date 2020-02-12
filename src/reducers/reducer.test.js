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
    const initialState = { study: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ study: 1 });
  });
});
