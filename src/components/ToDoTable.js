import ToDoRowItem from "./ToDoRowItem"

function ToDoTable(props) {
    return (
        <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>No.</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {props.toDoList.map(toDoItem => (
                <ToDoRowItem key={toDoItem.rowNumber} rowNumber={toDoItem.rowNumber} rowDescription={toDoItem.rowDescription} rowAssigned={toDoItem.rowAssigned} deleteToDoItem={props.deleteToDoItem}/>
              ))}
            </tbody>
          </table>
    )
}

export default ToDoTable