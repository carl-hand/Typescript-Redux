import { decrement, increment } from "./actionCreators";

type increment = ReturnType<typeof increment>;
type decrement = ReturnType<typeof decrement>;

type ActionTypes = increment | decrement;

export default ActionTypes;
