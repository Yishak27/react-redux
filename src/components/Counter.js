import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counters = useSelector(state => state.counter);
  const countTouch = useSelector(state => state.counterTouch);

  const toggleCounterHandler = () => {
    dispatch({ type: 'touch' })
  };
  const incrementHandler = () => {
    dispatch({ type: 'increment', value: 3 })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
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
