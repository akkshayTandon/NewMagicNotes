import './btn.css'
/* eslint-disable react/prop-types */

function Btn({ value, id, onButtonClick, titleValue, textValue }) {

    function handleClick(e) {
        e.preventDefault();

        if ((titleValue === "") || (textValue === "")) return

        onButtonClick(titleValue, textValue);
    }

    return (
        <button className="noteBtn" id={id} onClick={handleClick}>{value}</button>
    )
}

export default Btn