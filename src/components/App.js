import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");


  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle form submission and add new tasks
  const handleTaskFormSubmit = (text, category) => {
    setTasks([...tasks, { text, category }]);
  };

  const handleTaskDelete = (taskId) => {

    const updatedTasks = tasks.filter((task, index) => index !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={[...CATEGORIES, "All"]}
        selectedCategory={selectedCategory}
        onCategoryFilter={handleCategoryFilter}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;

