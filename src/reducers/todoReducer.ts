import { Reducer } from 'redux'
import { ScoreState } from '../store/scoreState';
import ActionTypes from '../actions/actionTypes';
import { DECREMENT, INCREMENT } from '../actions/actionCreators';

const initialState: ScoreState = {
  score: 0,
  name: '',
};

export const reducer: Reducer<ScoreState, ActionTypes> =
  (state = initialState, action: ActionTypes): ScoreState => {
  let score = 0;
  switch (action.type) {
    case INCREMENT:
      score = state.score + action.num;
      return {...state, score};
    case DECREMENT:
      score = state.score - action.num;
      return {...state, score, name: action.name};
    default:
      return state;
  }
};
