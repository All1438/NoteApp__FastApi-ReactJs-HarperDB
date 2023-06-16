import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import React from 'react'
import './app.css'
import Layout from './components/Layout.jsx'
import Notes from './pages/Notes.jsx'
import Note from './pages/Note.jsx'

const App = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" exact element={<Notes />} />
                <Route path="/note/id" element={<Note />} />
            </Routes>
        </Layout>
    </Router>
  )
}

export default App