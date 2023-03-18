import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things.", userId: 4},
    {id: '2', title: 'Slice', content: "The more I say slice, the more I want pizza.", userId: 3},
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(
              state,
              action: PayloadAction<{ id: string; title: string; content: string; userId: number;}>
            ) {
              state.push(action.payload);
            },
            prepare(title, content, userId) {
              return {
                  payload: {
                      id: nanoid(),
                      title,
                      content,
                      userId
                  }
              }
            }
          },
    }
});

export const selectAllPosts = (state: RootState) => state.posts;


export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;