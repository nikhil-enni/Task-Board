import { useState } from "react"


function NewToDoForm(props) {

    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');

    const submitTask = () => {
        if(description!=='' && assignedTo!==''){
            props.addTask(assignedTo, description)
            setAssignedTo('')
            setDescription('')
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned To</label>
                    <input type="text" className="form-control" required onChange={e => setAssignedTo(e.target.value)} value={assignedTo}></input>
                </div>
                <div>
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTask}>Add Task</button>
            </form>
        </div>
    )
}

export default NewToDoForm