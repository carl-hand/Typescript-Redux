import { Reducer } from 'redux'
import { ScoreState } from '../store/scoreState';
import  ActionTypes  from '../actions/actionTypes';
import { DECREMENT, INCREMENT } from '../actions/actionCreators';

// Type-safe initialState!
const initialState: ScoreState = {
  score: 0,
  name: '',
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
// this reducer type will effect reducer used in configureStore.ts
export const reducer: Reducer<ScoreState, ActionTypes> = (state = initialState, action: ActionTypes): ScoreState => {
  let score = 0;
  // Here is where the power of our Discriminated unions come into play.
  // we can use action.type here because each one of our action types has a type property:
  switch (action.type) {
    case INCREMENT:
      // what we return here, must match what's in our TodoState
      // if we try to add something new then we will get a compile error
      score = state.score + action.num;
      return { ...state, score };
    case DECREMENT:
      score = state.score - action.num;
      return { ...state, score, name: action.name };
    default:
      return state;
  }
};
