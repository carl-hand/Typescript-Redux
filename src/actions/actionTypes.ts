
// capturing the type annotation of our deleteTodo function
// Now we don't need an separate interface for the DecrementScore
// Advantage: Our action creator and Action types stay in Sync!!
// and we only need to update our action creator
import {decrement, increment} from "./actionCreators";

type DecrementScore = ReturnType<typeof decrement>;

// ReturnType gives us the return type of a function
type IncrementScore = ReturnType<typeof increment>;

// why do we need the return type of the action creators?
// because we want to use discriminated unions for 100% type safe reducers
// this will allows us to also get intellisense in our reducer
type ActionTypes = IncrementScore | DecrementScore;

export default ActionTypes;
