import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

import { addPost } from './postsSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const canSave = !!title && !!content && !!userId;

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleAuthorChange = (event) => setUserId(event.target.value);

  const handleSavePost = () => {
    if (canSave) {
      dispatch(addPost(title, content, userId));

      setTitle('');
      setContent('');
    }
  };

  const renderedUsers = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
          onChange={handleTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="postAuthor"
          value={userId}
          onChange={handleAuthorChange}
        >
          <option value=""></option>
          {renderedUsers}
        </select>
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleContentChange}
        />
        <button type="button" onClick={handleSavePost} disabled={!canSave}>
          Add Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
