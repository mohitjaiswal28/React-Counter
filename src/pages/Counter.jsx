
import React, { useState } from 'react';
import Button from '../components/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {

    if(count > 0)
        setCount(prevCount => prevCount - 1);

    else
        alert("Count is zero 🔥")
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className='counter'>
        <div>
          <h1>React Counter</h1>
        </div>
        <div className='main-count'>
          <h2>{count}</h2>
        </div>
      </div>

      <div className='plusminus'>
        <div className='plus'>
          <Button 
            label={"+"}
            onClick={increment}
          />
        </div>

        <div className='minus'>
          <Button 
            label={"-"}
            onClick={decrement}
          />
        </div>
      </div>

      <div className='counter'>
        <button onClick={reset} className='reset'>
            Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
