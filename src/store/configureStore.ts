import { ScoreState } from "./scoreState";
import { reducer } from "../reducers/todoReducer";
import { createStore, Store } from "redux";
import ActionTypes from "../actions/actionTypes";

export default function configureStore(): Store<ScoreState, ActionTypes> {

  return createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
};
