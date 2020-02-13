export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;
export const hasPooped = state => state.coffees > 9 && state.snacks > 0;
export const drankPotion = state => state.potions > 0;

export const getFace = state => {
  if(drankPotion(state)) {
    const i = Math.floor(Math.random() * 7);
    const arr = ['🐶', '🐸', '🐒', '🦄', '🐉', '🐔', '🦑', '🦖'];
    return arr[i];
  }
  if(hasPooped(state)) return '😅💩';
  if(isTired(state) && isHungry(state)) return '😠';
  if(isHyper(state) && isHungry(state)) return '😱';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '😲';
  if(isHungry(state)) return '😡';
  return '😀';
};
