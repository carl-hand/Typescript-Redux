import { Reducer } from 'redux'
import { ScoreState } from '../store/scoreState';
import ActionTypes from '../actions/actionTypes';
import { DECREMENT, INCREMENT } from '../actions/actionCreators';

const initialState: ScoreState = {
  score: 0,
  name: '',
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
// this reducer type will effect reducer used in configureStore.ts
// S The type of state consumed and produced by this reducer.
// A The type of actions the reducer can potentially respond to.
export const reducer: Reducer<ScoreState, ActionTypes> =
  (state = initialState, action: ActionTypes): ScoreState => {
    let score = 0;
    switch (action.type) {
      case INCREMENT:
        score = state.score + action.num;
        return { ...state, score };
      case DECREMENT:
        score = state.score - action.num;
        return { ...state, score, name: action.name};
      default:
        return state;
    }
};
