import './add.css'
import Btn from '../button/btn';
import NoteList from '../shownote/notelist/notelist';
import Search from '../search/search';
import { useEffect, useState } from 'react'
/* eslint-disable react/prop-types */


function Addnote() {

    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const [searchText, setSearchText] = useState('');

    const [notes, setNotes] = useState(() => {
        const localValue = localStorage.getItem("NOTES");
        if (localValue === null) return []

        return JSON.parse(localValue);
    })

    useEffect(() => {
        localStorage.setItem("NOTES", JSON.stringify(notes));
    }, [notes]);

    function addNote(title, text) {
        setNotes(currentNotes => {
            return [...currentNotes, { id: crypto.randomUUID(), title: title, text: text }]
        })

        setNoteTitle("");
        setNoteText("");
    }

    function handleClick() {
        setNoteTitle("");
        setNoteText("");
    }

    function deleteNote(id) {
        setNotes(currentNotes => {
            return currentNotes.filter(note => note.id !== id);
        })
    }


    return (
        <>
            <section id="addNote">
                <h2>Welcome! Add Your Note Here </h2>
                <input value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} type="text" placeholder="your Note Title here" name="myTitle" id="noteTitle" />
                <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} id="noteTxt" name="myNote" cols="40" rows="10" placeholder="your Note text Here"></textarea>

                <div id="noteBtns">
                    <Btn value={'Add Note'} id={'addNoteBtn'} onButtonClick={addNote} titleValue={noteTitle} textValue={noteText}></Btn>
                    <Btn value={'Reset'} id={'resetNoteBtn'} onButtonClick={handleClick}></Btn>
                </div>
            </section>
            <Search handleSearchNote={setSearchText}></Search>
            <NoteList notes={notes.filter((note) =>
                (note.title.toLowerCase().includes(searchText) || note.text.toLowerCase().includes(searchText))
            )}
                deleteNote={deleteNote}>
            </NoteList>
        </>
    )
}

export default Addnote