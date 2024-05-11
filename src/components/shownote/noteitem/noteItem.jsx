import { useState } from 'react'
import Btn from '../../button/btn'
import './noteitem.css'
/* eslint-disable react/prop-types */

function NoteItem({ id, title, text, deleteNote }) {
    const [Text, setText] = useState(text);
    return (
        <div className='noteGroup' id={id}>
            <h5 className='noteGroupTitle'>{title}</h5>
            {/* <p className='noteGroupText'>{text}</p> */}
            <textarea value={Text} onChange={(e) => setText(e.target.value)} className='noteGroupText'  placeholder="your Note text Here"></textarea>
            <Btn value={'Delete'} id={'deleteNoteBtn'} onButtonClick={() => deleteNote(id)}></Btn>
        </div>
    )
}

export default NoteItem