import { createSlice, nanoid, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { Post } from './Post';
import { getMembers,  BlogPost} from '../../../data/data'


export const fetchPosts = createAsyncThunk<BlogPost[]>(
  "posts/fetchPosts",
  async () => await getMembers(),
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
                    reactions: {
                      thumbsUp: 0,
                      heart: 0,
                  },
                  }
              }
            }
          },
          postUpdated(state, action) {
            const { userId, title, body } = action.payload;
            const existingPost = state.postList.find((post) => post.id === userId);
            if (existingPost) {
              existingPost.title = title;
              existingPost.body = body;
            }
          },
    },
    extraReducers(builder) {
      builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
        
        state.postList = payload;
      });
    },
});

export const selectAllPosts = (state: RootState) => state.posts.postList;
export const selectPostById = (state: RootState, postId: string) =>
  state.posts.postList.find((post) => post.id === postId);
export const { postAdded, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;