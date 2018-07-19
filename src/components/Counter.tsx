import * as React from "react";
import {ScoreState} from "../store/scoreState";
import {connect} from "react-redux";
import {AnyAction, bindActionCreators, Dispatch} from "redux";
import {decrement, increment} from "../actions/actionCreators";

export interface CounterProps {
  score: number;
  name: string;

  increment(num: number): ReturnType<typeof increment>;

  decrement(num: number, name: string): ReturnType<typeof decrement>;
}

const Counter = (props: CounterProps) => {

  const {score, name} = props;

  const increment = () => {
    props.increment(2);
  };

  const decrement = () => {
    props.decrement(2, 'Carl');
  };

  return (
    <div>
      <h1>{score}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {score <= 0 && props.name ? <p>Hard luck {name}</p> : null}
    </div>
  );
};


function mapStateToProps(state: ScoreState) {
  return {
    score: state.score,
    name: state.name,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
