import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import sub from "date-fns/sub";
import { Post } from "./Post";

const initialState: Post[] = [
    {id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    userId: 1,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
},
    {id: '2',
    title: 'Slice', 
    content: "The more I say slice, the more I want pizza.", 
    userId: 2,
    date: sub(new Date(), { minutes: 5 }).toISOString(),
},
    
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(
              state,
              action: PayloadAction<Post>
            ) {
              state.push(action.payload);
            },
            prepare(title, content, userId) {
              return {
                  payload: {
                      id: nanoid(),
                      title,
                      content,
                      date: new Date().toISOString(),
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