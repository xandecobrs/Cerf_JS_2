import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.css";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import Header from "./components/Header";
import TaskDetails from './components/TaskDetails.jsx'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Treino Xand ReactJS",
      completed: false,
    },
    {
      id: "2",
      title: "Toma ReactJS bucha",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Router path="" exact render={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;
