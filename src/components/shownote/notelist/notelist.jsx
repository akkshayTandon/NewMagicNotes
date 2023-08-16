import NoteItem from '../noteitem/noteItem'
import './notelist.css'
/* eslint-disable react/prop-types */

function NoteList({ notes, deleteNote }) {

    return (

        <div id='notesContainer'>
            {notes.length === 0 && <h2>No Notes To Show...</h2>}

            {notes.map(note => {
                return (
                    <NoteItem {...note} key={note.id} deleteNote={deleteNote}></NoteItem>
                )
            })}
        </div>

    )
}

export default NoteList