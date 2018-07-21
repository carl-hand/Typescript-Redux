import * as React from "react";
import { ScoreState } from "../store/scoreState";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { decrement, increment } from "../actions/actionCreators";
import { css } from 'emotion';

const container = css({
  color: 'hotpink',
  textAlign: 'center',
});

const paragraph = css({
  fontSize: '20px',
});

const button = css({
  width: '10%',
  backgroundColor: '#28a745',
  display: 'inline-block',
  color: '#fff',
  position: 'relative',
  top: '10px',
  marginLeft: '6px',
  padding: '8px 16px',
  letterSpacing: '1.5px',
  boxSizing: 'content-box',
  borderRadius: '5px',
  fontSize: '12px',
  fontWeight: 500,
  outline: 'none',
  boxShadow: '0 0 1px 1px rgba(255,255,255,0.8), 0 1px 0 0 rgba(0,0,0,0.298039)',
  WebkitBoxShadow: '0 0 1px 1px rgba(255,255,255,0.8) , 0 1px 0 0 rgba(0,0,0,0.298039)',
  WebkitTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms',
  MozTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms',
  OTransition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms',
  transition: 'all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms',

  '&:hover': {
    cursor: 'pointer',
    border: '1px solid rgba(178,178,178,1)',
    color: 'rgba(76,76,76,1)',
    WebkitBoxShadow: '0 0 1px 1px rgba(255,255,255,0.8) inset, 0 1px 0 0 rgba(0,0,0,0.298039)',
    boxShadow: '0 0 1px 1px rgba(255,255,255,0.8) inset, 0 1px 0 0 rgba(0,0,0,0.298039)',
  },

  '&:focus': {
    outline: 'none',
    borderColor: '#80bdff',
    boxShadow: '0 0 5px #80bdff',
  },

  '&:active': {
    position: 'relative',
    cursor: 'default',
    border: '1px solid rgba(211,211,211,1)',
    color: 'rgba(114,114,114,1)',
    backgroundColor: 'rgba(247,247,247,1)',
    WebkitBoxShadow: '0 0 0 2px #80bdff',
    boxShadow: '0 0 0 2px #80bdff',
    WebkitTransition: 'none',
    MozTransition: 'none',
    OTransition: 'none',
    transition: 'none',
  },
});

export interface CounterProps {
  score: number;
  name: string;

  increment(num: number): ReturnType<typeof increment>;

  decrement(num: number, name: string): ReturnType<typeof decrement>;
}

const Counter = (props: CounterProps) => {

  const { score, name } = props;

  const increment = () => {
    props.increment(2);
  };

  const decrement = () => {
    props.decrement(2, 'dude!');
  };

  return (
    <div className={container}>
      <h1>{score}</h1>
      <button className={button} onClick={increment}>+</button>
      <button className={button} onClick={decrement}>-</button>
      {score <= 0 && props.name ? <p className={paragraph}>Hard luck {name}</p> : null}
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
