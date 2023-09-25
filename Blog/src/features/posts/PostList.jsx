import { useSelector, useDispatch } from "react-redux";
import { postSelector } from "./postsSlice";
import '../../index.css'
const PostList = () => {
  const posts = useSelector(postSelector);
  const renderedPosts = posts.map((post) => {
      return (
        <article key={post.id}>
          <h3>{post.id}</h3>
          <h3>{post.content}</h3>
        </article>
      );
    });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
