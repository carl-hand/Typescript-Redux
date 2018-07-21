// capturing the type annotation of our deleteTodo function
// Now we don't need an separate interface for the DecrementScore
// Advantage: Our action creator and Action types stay in Sync!!
// and we only need to update our action creator
import { decrement, increment } from "./actionCreators";

type IncrementScore = ReturnType<typeof increment>;

type DecrementScore = ReturnType<typeof decrement>;

type ActionTypes = IncrementScore | DecrementScore;

export default ActionTypes;
