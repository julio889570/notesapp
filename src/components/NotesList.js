import Note from './Note'
import {nanoid} from 'nanoid';
import React from 'react'
import AddNote from './AddNote'

function NotesList({notes, handleAddNote, handleDeleteNote }) {

  return (
    <div className='notes-list'>
        {notes.map((note)=>(
            <Note 
            key={nanoid()}
            id={note.id} 
            text={note.text}
             date={note.date} 
             handleDeleteNote={handleDeleteNote}/>
        ))}
        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList
