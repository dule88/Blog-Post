import { createSlice, nanoid, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import sub from "date-fns/sub";
import { Post } from "./Post";
import { getMembers,  BlogPost} from '../../../data/data'

// const initialState: Post[] = [
//     {id: '1',
//     title: 'Learning Redux Toolkit',
//     content: "I've heard good things.",
//     userId: 1,
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: { thumbsUp: 0, heart: 0},
// },
//     {id: '2',
//     title: 'Slice', 
//     content: "The more I say slice, the more I want pizza.", 
//     userId: 2,
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: { thumbsUp: 0, heart: 0},
// },
    
// ]

export const fetchPosts = createAsyncThunk<BlogPost[]>(
  "posts/fetchPosts",
  async () => getMembers(),
);

export interface PostState {
  postList: BlogPost[];
}

const initialState = {
  postList: [],
} as PostState;


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      // reactionAdded(state, action) {
      //   const { postId, reaction } = action.payload
      //   const existingPost = state.postList.find(post => post.id === postId)
      //   if (existingPost) {
      //     existingPost.reactions[reaction]++
      //   }
      // },
        postAdded: {
            reducer(
              state,
              action: PayloadAction<Post>
            ) {
              state.postList.push(action.payload);
            },
            prepare(title, body, userId) {
              return {
                  payload: {
                    id: nanoid(),
                    title,
                    body,
                    datePosted: new Date().toISOString(),
                    userId,
                  }
              }
            }
          },
    },
    extraReducers(builder) {
      builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.postList.push(...payload);
      });
    },
});

export const selectAllPosts = (state: RootState) => state.posts.postList;


export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;