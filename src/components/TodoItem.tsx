import React from "react";
import { ListItem, Checkbox, ListItemText } from "@mui/material";

interface TodoItemProps {
  task: { id: number; text: string; completed: boolean };
  toggleTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask }) => {
  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => toggleTask(task.id)} />
      <ListItemText
        primary={task.text}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      />
    </ListItem>
  );
};

export default TodoItem;
