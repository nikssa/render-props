import { FunctionComponent, useState } from 'react';
import { StateProps } from '../types';

function Counter(props: { children: FunctionComponent<number> }) {
  const [state, setState] = useState<StateProps>({ count: 0 });
  const incrementCount = () => {
    setState((prevState: any) => {
      return { count: prevState.count + 1 };
    });
  };
  return props.children(state.count, incrementCount);
}

export default Counter;
