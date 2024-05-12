import Mouse from './components/Mouse';
import Cat from './components/Cat';
import { Props } from './types';
import LogInProvider from './components/LogInProvider';
import { useState } from 'react';
import SignButton from './components/SignButton';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter';

function App(props: { message: string }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <div className='left-bottom'>
        <Counter
          render={(count: number, incrementCount: () => void) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count: number, incrementCount: () => void) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    </>
  );
}

export default App;
