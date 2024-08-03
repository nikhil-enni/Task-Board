import React from 'react';

function MyTasks({ todoList, assignedTo }) {
  const getMyTasks = () => {
    return todoList.filter(task => task.rowAssigned === assignedTo);
  }

  return (
    <div>
      <h3 className="text-center my-4">My Tasks</h3>
      {getMyTasks().length > 0 ? (
        <ul className="list-group list-group-flush">
          {getMyTasks().map(task => (
            <li className="list-group-item" key={task.rowNumber}>
              <span className="font-weight-bold">{task.rowDescription}</span> - {task.tag}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned to you.</p>
      )}
    </div>
  );
}

export default MyTasks;
