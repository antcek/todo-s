import React from 'react';
import { Select, MenuItem, Checkbox, ListItemText } from '@mui/material';

interface TodoDropdownProps {
  tasks: { id: number; text: string; completed: boolean }[];
  toggleTask: (id: number) => void;
}

const TodoDropdown: React.FC<TodoDropdownProps> = ({ tasks, toggleTask }) => {
  return (
    <Select
      multiple
      value={tasks.filter(task => task.completed).map(task => task.id)}
      renderValue={() => 'Tasks'}
      style={{ width: '100%' }}
    >
      {tasks.map(task => (
        <MenuItem key={task.id} value={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default TodoDropdown;
