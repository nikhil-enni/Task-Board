import './App.css';
import NewToDoForm from './components/NewToDoForm';
import ToDoTable from './components/ToDoTable';
import React, {useState} from 'react';

function App() {

  const [todoList, setTodoList] = useState([])

  const [showToDoForm, setShowToDoForm] = useState(false);

  const addTask = (assignedTo, description) => {
    let rowNumber=0;
    if(todoList.length>0){
      rowNumber = todoList[todoList.length-1].rowNumber + 1
    }else {
      rowNumber = 1;
    }

      const newToDo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assignedTo
      }
      setTodoList(todoList => [...todoList, newToDo])
  }

  const deleteToDoItem = (deleteRowNumber) => {
    let filteredToDoList = todoList.filter(function(value) {
      return value.rowNumber!==deleteRowNumber;
    })
    setTodoList(filteredToDoList);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your tasks to do
        </div>
        <div className='card-body'>
          <ToDoTable toDoList = {todoList} deleteToDoItem = {deleteToDoItem}/>
          <button className='btn btn-primary' onClick = {() => setShowToDoForm(!showToDoForm)}>{showToDoForm ? 'Close' : 'Add Task'}</button>

          {showToDoForm &&
          <NewToDoForm addTask={addTask}/>
          }
          
        </div>
      </div>
    
    </div>
  );
}

export default App;
