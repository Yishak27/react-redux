import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { countAction } from '../store/index';
const Counter = () => {
  const dispatch = useDispatch();
  const counters = useSelector(state => state.counter);
  const countTouch = useSelector(state => state.counterTouch);

  const toggleCounterHandler = () => {
    dispatch(countAction.counterTouch());
  };
  const incrementHandler = () => {
    dispatch(countAction.increment(3))
  }
  const decrementHandler = () => {
    dispatch(countAction.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {countTouch && <div className={classes.value}>{counters}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
