import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "Suman Bhandari",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name) => {
        return {
          payload: {
            id: nanoid(),
            name: name,
          },
        };
      },
    },
  },
});

export const userSelector = (state) => {
  return state.users;
};

export default usersSlice.reducer;

export const { userAdded } = usersSlice.actions;
