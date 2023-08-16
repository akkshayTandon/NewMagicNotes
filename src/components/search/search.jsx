import './search.css'
/* eslint-disable react/prop-types */

function Search({ handleSearchNote }) {
    return (
        <input onChange={(event) => handleSearchNote(event.target.value)} type="text" name="noteSearch" id="notesearchbox" placeholder='Search your note here' />
    )
}

export default Search;