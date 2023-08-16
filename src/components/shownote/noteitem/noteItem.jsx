import Btn from '../../button/btn'
import './noteitem.css'
/* eslint-disable react/prop-types */

function NoteItem({ id, title, text, deleteNote }) {
    return (
        <div className='noteGroup' id={id}>
            <h5 className='noteGroupTitle'>{title}</h5>
            <p className='noteGroupText'>{text}</p>
            <Btn value={'Delete'} id={'deleteNoteBtn'} onButtonClick={() => deleteNote(id)}></Btn>
        </div>
    )
}

export default NoteItem