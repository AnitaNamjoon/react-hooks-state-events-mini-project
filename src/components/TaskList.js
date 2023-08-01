import React from "react";
import Task from "./Task";

// Sample task data to be displayed in the TaskList component
const tasksData = [
  { id: 1, text: "Complete homework", category: "Study" },
  { id: 2, text: "Go grocery shopping", category: "Personal" },
  { id: 3, text: "Exercise for 30 minutes", category: "Health" },
];

function TaskList() {
  return (
    <div className="tasks">
      {tasksData.map((task) => (
        <Task key={task.id} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
