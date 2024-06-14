import { Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import './index.css';
import Home from './components/Pages/Home';
import Posts from './components/Pages/Posts';
import PostDetail from './components/Pages/PostDetail';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
      </main>
    </div>
  );
};

export default App;
