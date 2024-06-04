import React, { useState } from "react";
import { Container, Tabs, Tab } from "@mui/material";
import TodoInput from "./components/TodoInput";
import TodoDropdown from "./components/TodoDropdown";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );

  return (
    <Container>
      <h1>TODO LIST</h1>
      <TodoInput addTask={addTask} />
      <Tabs value={filter} onChange={(e, value) => setFilter(value)}>
        <Tab label="All" value="all" />
        <Tab label="Active" value="active" />
        <Tab label="Completed" value="completed" />
      </Tabs>
      <TodoDropdown tasks={filteredTasks} toggleTask={toggleTask} />
    </Container>
  );
};

export default App;
