import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import {useState, useEffect} from 'react';

const App = () => {
    const [notes, setNotes] = useState([{
        id: nanoid(),
        text: 'Shopping List',
        date: '15/02/2022',
    },
    {
        id: nanoid(),
        text: 'To do list',
        date: '01/01/2022',
    },
   {
        id: nanoid(),
        text: 'March goals',
        date: '11/03/2022',
        },

]);

useEffect(()=>{ 
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app')
    ); //parsing retrived data to a JS object
    if (savedNotes) {
        setNotes(savedNotes);
    }
},[]);//if its empty it just going to run on the first run

useEffect(()=> { //saves notes to the local storage after each modification of a note
    localStorage.setItem(
        'react-notes-app',
        JSON.stringify(notes));
}, [notes]); //dependency array, if something in the note changes it triggers useEffect automatically


const addNote = (text) =>{
   // console.log(text);
   const date = new Date();
   const newNote = {
       id: nanoid(),
       text: text,
       date: date.toLocaleDateString(), //changes the format of data to the one used in your country
   };
   const newNotes = [...notes, newNote]; //copies existing notes, and adds a new note at the end
   setNotes(newNotes); //our new created array is being added
};
const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
};
    return (
        <div className='container'>
        <NotesList 
            notes={notes}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
        />
    </div>
    );
};
export default App;