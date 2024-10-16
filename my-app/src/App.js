import React from 'react';
import Login from './component/Login';
import Blogs from './Blogs';
import SingleBlog from './component/SingleBlog';
import AddBlog from './component/AddBlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blogs/:id" element={<SingleBlog />} /> {/* Corrected Typo */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
