import { useState } from "react"


function NewToDoForm({addTask}) {

    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [tag, setTag] = useState('');

    const submitTask = (e) => {
        e.preventDefault();
        addTask(assignedTo, description, tag);
        setAssignedTo('');
        setDescription('');
        setTag('');
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3 form-group">
                    <label className="form-label">Assigned To</label>
                    <input type="text" className="form-control" required onChange={(e) => setAssignedTo(e.target.value)} value={assignedTo}></input>
                </div>
                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label">Tag</label>
                    <select className="form-control" value={tag} onChange={(e) => setTag(e.target.value)}>
                        <option value="">Select Tag</option>
                        <option value="Urgent-Important">Urgent & Important</option>
                        <option value="Urgent-Not Important">Urgent & Not Important</option>
                        <option value="Not Urgent-Important">Not Urgent & Important</option>
                        <option value="Not Urgent-Not Important">Not Urgent & Not Important</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTask}>Add Task</button>
            </form>
        </div>
    )
}

export default NewToDoForm