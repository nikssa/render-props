import { FunctionComponent, useState } from 'react';
import { StateProps } from '../types';

function Counter(props: { render: FunctionComponent }) {
  const [state, setState] = useState<StateProps>({ count: 0 });
  const incrementCount = () => {
    setState((prevState: any) => {
      return { count: prevState.count + 1 };
    });
  };
  return props.render(state.count, incrementCount);
}

export default Counter;
