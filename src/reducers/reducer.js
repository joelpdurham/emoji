export const reducer = (state, action) => {

  return { ...state, coffees: state.coffees + 1 };
};
