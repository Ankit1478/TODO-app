import React, { useState } from 'react';

export function Todos({ todos }) {
  // render 
  const [completionStatus, setCompletionStatus] = useState(
    todos.map(() => false) // Initialize all todos as 'completed' initially
  );

  // Function to toggle the completion status of a specific todo
  const toggleCompletion = (index) => {
    const newStatus = [...completionStatus];
    newStatus[index] = !newStatus[index];
    setCompletionStatus(newStatus);
  };

  return (
    <div>
      {todos.map(function (todo, index) {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => toggleCompletion(index)}>
              {completionStatus[index] ? 'completed' : 'Mark as complete'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
