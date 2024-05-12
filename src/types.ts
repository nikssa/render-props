export type Props = { x: number; y: number };

export type MouseProps = {
  mouse: Props;
};

export type StateProps = {
  count: number;
};

export type CounterProps = {
  count: number;
  incrementCount: () => void;
};
