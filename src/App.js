import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className="App">
      <PostsList />
      {/* Add other components here */}
      <AddPostForm />
    </main>
  );
}

export default App;
