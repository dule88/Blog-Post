import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   incerement,
   decerement,
   reset,
   incrementByAmount
   } from "./counterSlice";
import { RootState } from '../../../redux/store';

import { useState } from "react";

export const Counter = () => {
    const count = useSelector((state: RootState) =>  state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState('0');

    // Function that add value, and if it is not number it equalls it to 0 if number is not in input;
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
      setIncrementAmount('0');
      dispatch(reset());
    };

    return (
        <section>
          <p>{count}</p>
          <div>
              <button onClick={() => dispatch(incerement())}>+</button>
              <button onClick={() => dispatch(decerement())}>-</button>
          </div>

          <input
          
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
           />

          <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}
            >Add Amount</button>
            <button onClick={resetAll}>Reset</button>
          </div>

        </section>
      );
    };

export default Counter;