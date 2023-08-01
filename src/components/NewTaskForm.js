import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

  
    const newTask = {
      text: taskText,
      category: selectedCategory,
    
      id: Date.now(),
    };

    onTaskFormSubmit(newTask);

    setTaskText("");
    setSelectedCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        
        <input
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectedCategory}
        
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

