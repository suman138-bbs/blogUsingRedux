import { useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../../features/posts/postsSlice";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/users/usersSlice";
const Form = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const onSavedPostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }

    setContent("");
    setTitle("");
  };

  const usersOptions = users.map((user) => {
    <option key={user.id} value={user.id}>
      {user.name}
    </option>;
  });
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        >
          <option value={userId}></option>
          {usersOptions}
        </select>
        <br />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <button type="button" onClick={onSavedPostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default Form;
