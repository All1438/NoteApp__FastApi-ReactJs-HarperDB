import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GrAdd } from "react-icons/gr";
import ListItem from "../components/ListItem"

const Notes = () => {
  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch("/notes/")
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div className='notes'>
      <div className="notes-header">
        <h2 className="notes-titile">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <Link to={'/new'} className="floating-button">
          <GrAdd />
      </Link>
    </div>
  )
}

export default Notes