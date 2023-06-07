/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
  posts: [],
  popularPosts: [],
  loading: false,
};

export const createPost = createAsyncThunk(
  "post/createPost",
  async (params) => {
    try {
      const { data } = await axios.post("/posts", params);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllPosts = createAsyncThunk("/post/getAllPosts", async () => {
  try {
    const { data } = await axios.get("/posts");

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // Create Post
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
      // state.user = action.payload.user;
      // state.token = action.payload.token;
    },
    [createPost.rejected]: (state, action) => {
      // state.status = action.payload.message;
      state.loading = false;
    },
    // Get All Posts
    [getAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.popularPosts = action.payload.popularPosts;
      // state.user = action.payload.user;
      // state.token = action.payload.token;
    },
    [getAllPosts.rejected]: (state, action) => {
      // state.status = action.payload.message;
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
