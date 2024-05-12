import Mouse from './components/Mouse';
import Cat from './components/Cat';
import { Props } from './types';

function App(props: { message: string }) {
  return (
    <>
      <Mouse>
        {(mouse: Props) => (
          <>
            <div className='mouse' style={{ height: '100vh', width: '100vw' }}>
              <h1>
                The mouse position is: {mouse.x}, {mouse.y},<br /> the message
                is: {props.message}
              </h1>
            </div>
            <Cat mouse={mouse} />
          </>
        )}
      </Mouse>
    </>
  );
}

export default App;
