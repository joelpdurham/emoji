describe('Reducer Test', () => {
  it('can handles the coffee case', () => {
    const action = 'DRINK COFFEE';
    const initialState = { coffees: 0 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });
});
