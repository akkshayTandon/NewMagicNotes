import { useState } from 'react'
import './nav.css'

function Navbar() {

    const [isActive, setIsActive] = useState(true);

    function handleClick() {
        setIsActive(!isActive)
    }

    return (
        <nav className='navbar'>
            <h1 onClick={() => handleClick()}>MagicNotes</h1>
            <ul className={isActive ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#addNoteBtn">Notes</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

