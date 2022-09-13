import { Grid } from "@mui/material";
import { useState } from "react";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";

export default function ToDo({ language }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (createTask) => {
    setTasks([...tasks, createTask]);
  };

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={6}>
        <CreateToDo language={language} handleAdd={addTask} />
      </Grid>
      <Grid item xs={6}>
        <ToDoList data={tasks} />
      </Grid>
    </Grid>
  );
}
