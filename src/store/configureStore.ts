import {ScoreState} from "./scoreState";
import {reducer} from "../reducers/todoReducer";
import {createStore, Store} from "redux";
import ActionTypes from "../actions/actionTypes";

// Caveat: Store<S, A> here must match what we specified as our reducer type
// here we tell our store the type of state held by this store and the actions
// which may be dispatched
export default function configureStore(): Store<ScoreState, ActionTypes> {

  return createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
};
