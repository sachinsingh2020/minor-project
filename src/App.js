import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import UploadPage from './Components/UploadPage/UploadPage.jsx';
import DetailPage from './Components/DetailPage/DetailPage.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
