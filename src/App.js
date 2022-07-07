import { useEffect, useState } from 'react';
import './App.css';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header'; 

function App() {
  const [notes, setNotes] = useState([
  
    {
    id: nanoid(),
    text:'This is my first note!',
    date: '15/04/2021'
  },
  {
    id: nanoid(),
    text:'This is my second note!',
    date: '12/04/2021'
  },
  {
    id: nanoid(),
    text:'This is my third note!',
    date: '31/04/2021'
  },
  {
    id: nanoid(),
    text:'This is new note!',
    date: '22/09/2022'
  },
  {
    id: nanoid(),
    text:'This is new note!',
    date: '22/09/2022'
  },
  
  ]);
 const [searchText, setSearchText] = useState('')
 const [darkMode, setDarkMode] = useState(false);

 function getLocal_storage(){
  const storedNotes = localStorage.getItem('notes-app-react')
  if (storedNotes){
    JSON.parse(storedNotes)
  }
 }
getLocal_storage();

useEffect(() => {
  localStorage.setItem('notes-app-react', JSON.stringify(notes))
}, [notes])



  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

const deleteNote = (id) => {
 const newNotes = notes.filter((note)=> note.id  !== id);
 setNotes(newNotes);
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
       handleAddNote={addNote}
       handleDeleteNote={deleteNote}
       
       />
    </div>
    </div>
   
  );
}

export default App;
