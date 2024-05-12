function ClickCounter(props: any) {
  return (
    <button onClick={props.incrementCount}>Clicked {props.count} times</button>
  );
}

export default ClickCounter;
