import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'


const Note = () => {
  let {id} = useParams()
  const navigate = useNavigate()

  let [note, setNote] = useState("")

  useEffect(() => {
    getNote()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  let getNote = async () => {
    if(id === "new") return
    let response = await fetch(`/notes/${id}`)
    let data = await response.json()
    setNote(data)
  }

  let addNote = async () => {
    await fetch(`/notes/`, {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(note)
    })
  }

  let updateNote = async () => {
    await fetch(`/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    await fetch(`/notes/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-type":"application/json"
      }
    })
    navigate('/')
  }

  let handleSubmit = () => {
    if(id !== 'new' && note.body === ''){
      deleteNote()
    } else if(id !== 'new'){
      updateNote()
    } else if (id === 'new' && note.body !== null){
      addNote()
    }
    navigate('/')
  }

  let handleChange = (value) => {
    setNote(note => ({...note, 'body':value}))
  }

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <BiArrowBack onClick={handleSubmit} />
        </h3>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ): (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea onChange={(e) => {handleChange(e.target.value)}}  value={note.body}></textarea>
    </div>
  )
}

export default Note