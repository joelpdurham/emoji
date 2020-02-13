export const reducer = (state, action) => {
  switch(action) {
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    case 'DRINK_POTION':
      return { ...state, potions: state.potions + 1 };
    default:
      return state;
  }

};
