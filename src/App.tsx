import { Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import './index.css';
import Posts from './components/Pages/Posts';
import PostDetail from './components/Pages/PostDetail';
import AboutUs from './components/Pages/AboutUs';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
      <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
      </main>
    </div>
  );
};

export default App;
