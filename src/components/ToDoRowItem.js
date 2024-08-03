import { useState } from "react"

function ToDoRowItem(props) {

    const [showPopup, setShowPopup] = useState(false)

    const handleDelete = () => {
        setShowPopup(false);
        props.deleteToDoItem(props.rowNumber);
    };

    return(
        <>
        <tr onClick={() => setShowPopup(true)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td>{props.rowTag}</td>
            <td>
                <button onClick={(e) => {e.stopPropagation(); setShowPopup(true);}}>Actions</button>
            </td>
        </tr>
        {showPopup && (
            <div className="popup">
                <div className="popup-content">
                    <p>Choose an action:</p>
                    <button onClick={() => setShowPopup(false)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={() => setShowPopup(false)}>Cancel</button>
                </div>
            </div>
        )}
        </>
    )
}

export default ToDoRowItem