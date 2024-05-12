import { FunctionComponent, MouseEvent, useState } from 'react';
import { Props } from '../types';

function Mouse({ children }: { children: FunctionComponent<Props> }) {
  const [state, setState] = useState<Props>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  return <div onMouseMove={handleMouseMove}>{children(state)}</div>;
}

export default Mouse;
