function HoverCounter(props: any) {
  return (
    <h3 style={{ backgroundColor: 'white' }} onMouseOver={props.incrementCount}>
      Hovered {props.count} times
    </h3>
  );
}

export default HoverCounter;
