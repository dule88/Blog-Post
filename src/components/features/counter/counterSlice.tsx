import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
     // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        incerement: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
            state.count +=1;
        },
        decerement: (state) => {
            state.count -=1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    }
});

export const { incerement, decerement, reset, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;



