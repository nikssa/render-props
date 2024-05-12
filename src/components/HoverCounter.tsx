import { CounterProps } from '../types';

function HoverCounter(props: CounterProps) {
  return (
    <h3 style={{ backgroundColor: 'white' }} onMouseOver={props.incrementCount}>
      Hovered {props.count} times
    </h3>
  );
}

export default HoverCounter;
