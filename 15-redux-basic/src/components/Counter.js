import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter); // state에서 필요한 부분 추출하는 함수, 자동으로 store에 subscribe
  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle'});
    dispatch(counterActions.toggle()); // action 객체 생성
  };

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increase(10)); // {type: 'SOME_UNIQUE_ID', payload: 10} 
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement()); 
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
