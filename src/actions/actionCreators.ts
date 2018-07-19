// ActionTypeKeys
export const INCREMENT = 'INCREMENT_COUNTER';
export const DECREMENT = 'DECREMENT_COUNTER';

// Action Creators
export const increment = (num: number) => ({
  num,
  // type: INCREMENT,
  type: INCREMENT as typeof INCREMENT,
});

export const decrement = (num: number, name: string) => ({
  num,
  name,
  // type: DECREMENT,
  type: DECREMENT as typeof DECREMENT,
});
