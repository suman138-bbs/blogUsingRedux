import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const postSelector = (state) => {
  return state.posts;
};

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
