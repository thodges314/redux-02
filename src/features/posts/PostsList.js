import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>

        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    ));

  return (
    <section>
      <h2>posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
