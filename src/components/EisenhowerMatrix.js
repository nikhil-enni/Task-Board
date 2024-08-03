import React from 'react';
import '../styles/EisenhowerMatrix.css';

function EisenhowerMatrix({ todoList }) {
  const getFilteredTasks = (tag) => {
    return todoList ? todoList.filter(task => task.tag === tag) : [];
  }

  const renderTasks = (tasks) => {
    return tasks.length > 0 ? (
      <ul className="list-group list-group-flush">
        {tasks.map(task => (
          <li className="list-group-item" key={task.rowNumber}>
            <span className="font-weight-bold">{task.rowDescription}</span> - {task.rowAssigned}
          </li>
        ))}
      </ul>
    ) : (
      <p>No tasks available.</p>
    );
  }

  return (
    <div>
      <h3 className="text-center my-4">Eisenhower Matrix</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white">
              Urgent & Important
            </div>
            <div className="card-body">
              {renderTasks(getFilteredTasks('Urgent-Important'))}
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-warning">
            <div className="card-header bg-warning text-white">
              Urgent & Not Important
            </div>
            <div className="card-body">
              {renderTasks(getFilteredTasks('Urgent-Not Important'))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              Not Urgent & Important
            </div>
            <div className="card-body">
              {renderTasks(getFilteredTasks('Not Urgent-Important'))}
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-secondary">
            <div className="card-header bg-secondary text-white">
              Not Urgent & Not Important
            </div>
            <div className="card-body">
              {renderTasks(getFilteredTasks('Not Urgent-Not Important'))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EisenhowerMatrix;
