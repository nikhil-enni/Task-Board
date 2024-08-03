import ToDoRowItem from "./ToDoRowItem"

function ToDoTable(props) {
    return (
        <table className='table table-hover table-striped'>
            <thead>
              <tr>
                <th scope='col'>No.</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
                <th scope='col'>Tag</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.toDoList.map(toDoItem => (
                <ToDoRowItem key={toDoItem.rowNumber} rowNumber={toDoItem.rowNumber} rowDescription={toDoItem.rowDescription} rowAssigned={toDoItem.rowAssigned} rowTag={toDoItem.tag} deleteToDoItem={props.deleteToDoItem}/>
              ))}
            </tbody>
          </table>
    )
}

export default ToDoTable