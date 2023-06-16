import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react'
import Layout from './components/Layout'
import Notes from './pages/Notes'
import Note from './pages/Note'

function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            {" "}
            <Route path='/' exact element={<Notes />} />
            <Route path='/:id' element={<Note />} />
          </Routes>
        </Layout>
      </Router>
    );
}

export default App;
