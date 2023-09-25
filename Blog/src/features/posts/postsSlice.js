import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Redux is the global state management technique in javaScript",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      console.log(state);
      state.push(action.payload);
    },
  },
});

export const postSelector = (state) => {
  return state.posts;
};

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
