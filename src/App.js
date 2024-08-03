import './App.css';
import NewToDoForm from './components/NewToDoForm';
import ToDoTable from './components/ToDoTable';
import React, {useState} from 'react';
import EisenhowerMatrix from './components/EisenhowerMatrix';
import MyTasks from './components/MyTasks';

function App() {

  const [todoList, setTodoList] = useState([])

  const [showToDoForm, setShowToDoForm] = useState(false);
  const [showEisenhowerMatrix, setShowEisenhowerMatrix] = useState(false);
  const [showMyTasks, setShowMyTasks] = useState(false);
  const assignedToMe = "Nikhil";

  const addTask = (assignedTo, description, tag) => {
    let rowNumber=0;
    if(todoList.length>0){
      rowNumber = todoList[todoList.length-1].rowNumber + 1;
    }else {
      rowNumber = 1;
    }

      const newToDo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assignedTo,
        tag: tag
      }
      setTodoList(todoList => [...todoList, newToDo])
  }

  const deleteToDoItem = (deleteRowNumber) => {
    let filteredToDoList = todoList.filter(function(value) {
      return value.rowNumber!==deleteRowNumber;
    })
    setTodoList(filteredToDoList);
  }

  console.log("Current todoList in App component:", todoList);

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          Your tasks to do
          <div>
          <button className='btn btn-secondary mr-2' onClick={() => setShowEisenhowerMatrix(!showEisenhowerMatrix)}>
            {showEisenhowerMatrix ? 'Close Dashboard' : 'Dashboard'}
          </button>
          <button className='btn btn-secondary' onClick={() => setShowMyTasks(!showMyTasks)}>
              {showMyTasks ? 'Close My Tasks' : 'My Tasks'}
          </button>
          </div>
        </div>
        <div className='card-body'>
          {showEisenhowerMatrix ? (
            <EisenhowerMatrix todoList={todoList}/>
          ) : showMyTasks ? (
            <MyTasks todoList={todoList} assignedTo={assignedToMe} />
            ) : (
            <>
            <ToDoTable toDoList = {todoList} deleteToDoItem = {deleteToDoItem}/>
            <button className='btn btn-primary' onClick = {() => setShowToDoForm(!showToDoForm)}>{showToDoForm ? 'Close' : 'Add Task'}</button>
            {showToDoForm && <NewToDoForm addTask={addTask}/>}
            </>
          )}
        </div>
      </div>
    
    </div>
  );
}

export default App;
