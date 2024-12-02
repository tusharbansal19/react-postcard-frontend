import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage'; // Optional: A 404 page
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import StudioPage from './pages/StudioPage';

const App = () => (
  <Router>
    <div className=" overflow-hidden w-full p-0">

    <Navbar />
    <Sidebar />
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/studio" element={<StudioPage />} />
        
        <Route path="*" element={<NotFoundPage />} /> {/* Handles undefined paths */}
      </Routes>
    </div>
    </div>
  </Router>
);

export default App;
