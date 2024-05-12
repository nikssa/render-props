import { useState } from 'react';

function Counter(props: any) {
  const [state, setState] = useState({ count: 0 });
  const incrementCount = () => {
    setState((prevState: any) => {
      return { count: prevState.count + 1 };
    });
  };
  return props.render(state.count, incrementCount);
}

export default Counter;
