import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface TodoInputProps {
  addTask: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
    >
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TodoInput;
