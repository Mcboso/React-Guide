import useCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
  const counterUpdateFn = (prev) => prev - 1;
  const counter = useCounter(counterUpdateFn);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
