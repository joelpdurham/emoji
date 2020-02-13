const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
  { name: 'DRINK_POTION', text: 'Magic Potion', stateName: 'potions' },
  { name: 'RESET', text: 'reset' }
]; 

export const getActions = (state) => {
  return actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));
};
