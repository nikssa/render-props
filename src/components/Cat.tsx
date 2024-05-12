import { MouseProps } from '../types';

function Cat({ mouse }: MouseProps) {
  const { x, y } = mouse;
  return (
    <div className='cat' style={{ position: 'absolute', left: x, top: y }} />
  );
}

export default Cat;
