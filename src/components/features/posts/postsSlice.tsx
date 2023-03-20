import { createSlice, nanoid, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import sub from "date-fns/sub";
import { Post } from "./Post";
import { getMembers,  BlogPost} from '../../../data/data'


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