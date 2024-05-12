import { CounterProps } from '../types';

function ClickCounter(props: CounterProps) {
  return (
    <button onClick={props.incrementCount}>Clicked {props.count} times</button>
  );
}

export default ClickCounter;
